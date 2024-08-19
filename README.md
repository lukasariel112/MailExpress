# MailExpress 📧

**MailExpress** é um projeto simples e eficiente para enviar e-mails usando Node.js e Nodemailer. Este repositório demonstra como integrar o envio de e-mails através do serviço SMTP da Brevo (anteriormente Sendinblue), utilizando credenciais diretamente no código.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Nodemailer**: Biblioteca robusta para envio de e-mails com Node.js.
- **Brevo (Sendinblue)**: Serviço de e-mail SMTP utilizado para enviar os e-mails.

## 🛠️ Como Configurar e Usar

### 1. Clonar o Repositório

Comece clonando o repositório e navegando até o diretório do projeto:

bash
```
git clone https://github.com/seu-usuario/MailExpress.git
cd MailExpress 
```
2. Instalar Dependências

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, instale as dependências necessárias:

bash

npm install

3. Configuração de Credenciais

As credenciais de e-mail já estão definidas no código, como mostrado abaixo:

javascript

```
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true para 465, false para outras portas
    auth: {
        user: "7a8dac001@smtp-brevo.com", // Seu usuário de e-mail
        pass: "yzMERD8rF3tajHUf"          // Sua senha de e-mail
    }
});
```

4. Enviar um E-mail

Para enviar um e-mail, execute o seguinte comando no terminal:

bash
```
node sendEmail.js
```
Se tudo estiver configurado corretamente, você verá a mensagem Email enviado: <resposta do servidor> no console.
📄 Estrutura do Projeto

📢 Aviso de Segurança

É importante lembrar que armazenar credenciais diretamente no código não é uma prática recomendada, especialmente em ambientes de produção. Considere o uso de variáveis de ambiente ou serviços de gerenciamento de segredos para proteger suas credenciais.
📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Lucas Ariel

---

Você pode substituir as informações de nome, e-mails, e links conforme necessário. Este `README.md` é claro, organizado, e visualmente atrativo, além de fornecer instruções detalhadas para uso.
