const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, 
    auth: {
        user: "7a8dac001@smtp-brevo.com", // Seu usuário de e-mail
        pass: "yzMERD8rF3tajHUf"          // Sua senha de e-mail
    }
});

let mailOptions = {
    from: '"Seu nome" <email@gmail.com>',  // Remetente
    to: "outroemail@gmail.com",             // Destinatário
    subject: "Teste do Email",              // Assunto
    text: "Teste enviado com sucesso"       // Conteúdo do e-mail
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("Email enviado: " + info.response);
});
