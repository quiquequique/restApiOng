/* eslint-disable no-console */
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const { EmailData } = require('../helpers/email2.helpers');

const sendEmail = (firstName, lastName, email) => {
  // eslint-disable-next-line global-require
  const sgMail = require('@sendgrid/mail');
  const emailBody = new EmailData(firstName, lastName);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
    subject: emailBody.emailSubject,
    html: emailBody.emailHtml,
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
