const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(express.static("static"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/about.html", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/chronical.html", (req, res) => {
  res.sendFile(__dirname + "/chronical.html");
});
app.get("/gallery.html", (req, res) => {
  res.sendFile(__dirname + "/gallery.html");
});
app.get("/members.html", (req, res) => {
  res.sendFile(__dirname + "/members.html");
});

app.get("/team_23-25.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/team_23-25.html"));
});
app.get("/team_22-23.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/team_22-23.html"));
});
app.get("/prev.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/prev.html"));
});
app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.post("/contact.html", (req, res) => {
  const name = req.body.nameoftheperson;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  //const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ev.mukesh13j@gmail.com",
      pass: "jjyzyppafnkhdfz",
    },
  });

  var mailOptions = {
    from: email,
    to: "21131a0453@gvpce.ac.in",
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    //res.send("Email sent successfully");
    res.redirect("/contact.html");
  });
});

app.listen(3000, () => {
  console.log("server started at 3000");
});
