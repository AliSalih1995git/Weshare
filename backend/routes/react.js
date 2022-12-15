const express = require("express");
const { authUser } = require("../middlwares/auth");
const { reactPost, getReacts } = require("../controller/react");

const router = express.Router();
router.put("/reactPost", authUser, reactPost);
router.get("/getReacts/:id", authUser, getReacts);
module.exports = router;
