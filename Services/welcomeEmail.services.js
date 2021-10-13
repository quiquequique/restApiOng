/* eslint-disable no-console */
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const { emailHtml, emailSubject, userData } = require('../helpers/email2.helpers');

const sendEmail = (firstName, lastName, email) => {
  console.log(firstName, lastName, email);
  userData.firstNames = firstName;
  userData.lastNames = lastName;
  console.log(userData.firstName + userData.lastName);
  // eslint-disable-next-line global-require
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'eabramzon@hotmail.com', // Change to your recipient
    from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
    subject: emailSubject,
    html: emailHtml,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
