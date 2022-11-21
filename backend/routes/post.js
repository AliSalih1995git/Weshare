const express = require('express');
const { createPost, getAllPosts } = require('../controller/post');
const { authUser } = require('../middlwares/auth');
const router = express.Router();

router.post('/createPost', authUser, createPost);
router.get('/getAllPosts', getAllPosts);

module.exports = router;
