const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: '', 
  },
});

let mailOptions = {
  from: '', 
  to: '',       
  subject: 'Hello from Node.js',
  text: 'Hello Node!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error.message);
    return;
  }
  console.log('Email sent:', info.response);
});
