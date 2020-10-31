const express = require('express');
const router = express.Router();

router.get('/popular', (req, res) => {
    res.status(200).send("인기 많은 순 뉴스");
});

router.get('/bestreply', (req, res) => {
    res.status(200).send("댓글 많은 순 뉴스");
});

router.get('/age', (req, res) => {
    res.status(200).send("나이별 랭킹 뉴스");
});

module.exports = router;