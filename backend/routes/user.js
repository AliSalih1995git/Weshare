const express = require('express');
const {
  register,
  activateAccount,
  login,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  ChangePassword,
  getProfile,
  updateProfilePicture,
} = require('../controller/user');
const { authUser } = require('../middlwares/auth');
const router = express.Router();

router.post('/register', register);
router.post('/activate', authUser, activateAccount);
router.post('/login', login);
router.post('/sendVerification', authUser, sendVerification);
router.post('/findUser', findUser);
router.post('/sendResetPasswordCode', sendResetPasswordCode);
router.post('/validateResetCode', validateResetCode);
router.post('/ChangePassword', ChangePassword);
router.get('/getProfile/:username', authUser, getProfile);
router.put('/updateProfilePicture', authUser, updateProfilePicture);

module.exports = router;
