const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  let testAccount = await nodeMailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const mailOptions = {
    from: testAccount.user,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
