const express = require('express');
const { createPost, getAllPosts, comment } = require('../controller/post');
const { authUser } = require('../middlwares/auth');
const router = express.Router();

router.post('/createPost', authUser, createPost);
router.get('/getAllPosts', getAllPosts);
router.put('/comment', authUser, comment);

module.exports = router;
