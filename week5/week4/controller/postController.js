const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { User, Post, Like } = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { userId, title, contents } = req.body;
        // 사진 파일
        const postImageUrl = req.file.location;
        try {
            // 1. Read user
            const user = await User.findOne({ where: { id: userId } });
            // 2. Create posts - postImageUrl 명시해줘야 url 디비에 등록됨!
            const post = await Post.create({ title, contents, postImageUrl: postImageUrl });
            // 3. adding FK to created row
            await user.addPost(post);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    // 게시글 조회
    readAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                group: 'id',
                attributes: ['title', 'contents', [sequelize.fn("COUNT", "Liker.Like.PostId"), 'likeCnt']],
                include: [{
                    // 불러와야 할 모델에서의 값들
                    model: User,
                    attributes: ['id', 'userName', 'email'],
                }, {
                    model: User,
                    // 겹치는 이름 방지를 위해 as 로 리네이밍 해줌
                    as: 'Liker',
                    attributes: ['userName'],
                }]
            });
            console.log(JSON.stringify(posts, null, 2));
            return res
                .status(sc.OK)
                .send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            console.log(err);
            return res
                .status(sc.INTERNAL_SERVER_ERROR)
                .send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL));
        }
    },

    createLike : async (req, res) => {
        const PostId = parseInt(req.params.postId);
        const UserId = parseInt(req.body.userId);
        try {
            // 이미 좋아요가 눌러져 있을 경우: 좋아요 취소하기
            // 조건 처리 해주지 않으면 Error: Duplicate entry '1-0' for key 'Like.PRIMARY'
            const alreadyLike = await Like.findOne({ where: { PostId, UserId } });
            if (alreadyLike) {
                await Like.destroy({ where: { PostId, UserId } });
                return res.status(sc.OK).send(ut.success(sc.OK, "게시글 좋아요 취소 성공", alreadyLike,),
            );
            } else {
                // 좋아요 누르기
                const like = await Like.create({PostId, UserId: UserId});
                return res.status(sc.OK).send(ut.success(sc.OK, '게시글 좋아요 성공', like));
            }
            
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, '게시글 좋아요 실패'));
        }
    }
}