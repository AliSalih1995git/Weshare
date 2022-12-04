const express = require('express');
const { conversation,getConversation ,messagePost,messageGet,getFirstSecondConversation} = require('../controller/messanger');
const { authUser } = require('../middlwares/auth');
const router = express.Router();

router.post('/conversation', conversation);
router.get('/conversation/:userId', getConversation);
router.get('/conversation/find/:firstUserId/:secondUserId', getFirstSecondConversation);

router.post('/messagePost', messagePost);
router.get('/messageGet/:conversationId', messageGet);


module.exports = router;