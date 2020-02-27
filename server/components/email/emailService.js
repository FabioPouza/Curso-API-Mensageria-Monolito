const mailer = require('../../config/mailer/mailer');

module.exports = {
    async sendEmail(content) {

        try {
            let info = await mailer.sendMail({
                from: '"Curso" <fa-pouza@hotmail.com>', // sender address
                to: "pedrozelin@gmail.com", // list of receivers
                subject: "User", // Subject line
                text: `O usuario ${content} foi cadastrado com sucesso!`, // plain text body
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}