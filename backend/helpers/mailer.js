const nodemailer = require('nodemailer');

const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const auth_link = 'https://developers.google.com/oauthplayground';
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(MAILING_ID,MAILING_SECRET, MAILING_REFRESH, auth_link);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken(); 
  const stmp = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAUTH2',
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {  
    from: EMAIL,
    to: email,
    subject: 'Weshare email verification',
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;font-weight:600;color:#45458a"><img style="width:5%" src="assets/images/logo.png" alt="weshare logo logo"><span>Action requise:Activate your<soan style="color:#00f">weshare</soan>account</span></div><div style="padding:1rem;border-top:1px solid wheat;border-bottom:1px solid wheat;color:#141823;font:size 17px;font-family:Roboto"><span>Hello ${name}</span></div><div style="padding:20px 0"><span style="padding:1.5em 0">You recently created an account on weshare. To complete your registration. please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#08d7f2;color:#081067;text-decoration:none;font-weight:600">Confirm your account</a><br>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
exports.sendResetCode = (email, name, code) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "Reset Weshare password",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif;font-weight:600;color:#45458a"><img style="width:5%" src="assets/images/logo.png" alt="weshare logo logo"><span>Action requise:Activate your<soan style="color:#00f">weshare</soan>account</span></div><div style="padding:1rem;border-top:1px solid wheat;border-bottom:1px solid wheat;color:#141823;font:size 17px;font-family:Roboto"><span>Hello ${name}</span></div><div style="padding:20px 0"><span style="padding:1.5em 0">You recently created an account on weshare. To complete your registration. please confirm your account.</span></div><a style="width:200px;padding:10px 15px;background:#08d7f2;color:#081067;text-decoration:none;font-weight:600">${code}</a><br>`,

  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
