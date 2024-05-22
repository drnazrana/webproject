const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));



const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-us.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});


app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'gallery.html'));
});


app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});


app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});






app.get('/menstruation', (req, res) => {
  res.sendFile(path.join(__dirname, 'menstruation.html'));
});

app.get('/nutrition', (req, res) => {
  res.sendFile(path.join(__dirname, 'nutrition.html'));
});
app.get('/anemia', (req, res) => {
  res.sendFile(path.join(__dirname, 'anemia.html'));
});

app.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, 'media.html'));
});






app.post('/contact-us', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'drnazranapatients@gmail.com',
      pass: 'iqnc uhqn xpdc gjvu'
    }
  });
 
  const mailOptions = {
    from:email, 
    to: 'fatimamasroor12345@gmail.com',
    subject: subject || 'No Subject',
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Form submitted successfully!');
    }
  });
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
