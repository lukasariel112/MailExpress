
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: "7a8dac001@smtp-brevo.com",
        pass: "yzMERD8rF3tajHUf"
    }
});

let mailOptions = {
    from: '"Seu nome" <email@gmail.com>',
    to: "outroemail@gmail.com",
    subject: "Teste do Email",
    text: "Teste enviado com sucesso"
};

transporter.sendMail(mailOptions, (error, info) => {
     if (error){
        return console.log(error);
     }
     console.log("Email enviado" + info.response);
})