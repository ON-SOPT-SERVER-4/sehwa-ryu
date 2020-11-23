const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { User, Post, Like } = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const { userId, title, contents } = req.body;
        try {
            // 1. Read user
            const user = await User.findOne({ where: { id: userId } });
            // 2. Create posts
            const post = await Post.create({ title, contents });
            // 3. adding FK to created row
            await user.addPost(post);
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
    readAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                group: 'id',
                attributes: ['title', 'contents', [sequelize.fn("COUNT", "Liker.Like.PostId"), 'likeCnt']],
                include: [{
                    model: User,
                    attributes: ['id', 'userName', 'email'],
                }, {
                    model: User,
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
            const like = await Like.create({UserId, PostId});
            return res.status(sc.OK).send(ut.success(sc.OK, '게시글 좋아요 성공', like));
        } catch (err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, '게시글 좋아요 실패'));
        }
    }
}