const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/', userController.readAll);
router.get("/:id", userController.readOne); // Level3 과제
router.put("/:id", userController.editOne);
router.delete("/:id", userController.deleteOne)

module.exports = router;