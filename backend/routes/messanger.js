const express = require("express");
const {
  newConversation,
  getConversation,
  addMessage,
  messageGet,
  getFirstSecondConversation,
} = require("../controller/messanger");
const { authUser } = require("../middlwares/auth");
const router = express.Router();

router.post("/newConversation", authUser, newConversation);
router.get("/getConversation/:userId", authUser, getConversation);
router.get(
  "/getFirstSecondConversation/find/:firstUserId/:secondUserId",
  authUser,
  getFirstSecondConversation
);

router.post("/addMessage", authUser, addMessage);
router.get("/messageGet/:conversationId", authUser, messageGet);

module.exports = router;
