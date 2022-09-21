const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: '465',
        secure: 'true',
        auth: {
            user: 'info@kritagya.in',
            pass: 'Kritagya@WebDeveloper#2022'
        }
    })

    const mailOptions = {
        from: 'info@kritagya.in',
        to: 'info@kritagya.in',
        subject: `Portofolio Website Mail`,
        text:` First Name: ${req.body.firstName} || Last Name:  ${req.body.lastName} || Email:  ${req.body.email}  Message: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        }
        else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})