export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ottenadd@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: `${req.body.email}`,
    to: "ottenadd@gmail.com",
    subject: `Message From ${req.body.firstName} ${req.body.lastName}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
