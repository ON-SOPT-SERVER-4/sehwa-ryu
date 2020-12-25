const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');
const upload = require("../../modules/multer");


// 게시글 작성
router.post('/', upload.single('postImageUrl'), postController.createPost);
// 전체 게시글 조회 + 작성자 + 좋아요 누른 사람들
router.get('/', postController.readAllPosts);
// 좋아요 누르기
router.post('/:postId/like', postController.createLike);

//router

module.exports = router;