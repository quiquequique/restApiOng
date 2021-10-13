// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const { emailHtml, emailSubject } = require( "../helpers/email.helpers")

const sendEmail = () => {

//javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'eabramzon@hotmail.com', // Change to your recipient
  from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
  subject: emailSubject,
  // text: 'and easy to do anywhere, even with Node.js',
  html: emailHtml,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

}

module.exports = sendEmail ;