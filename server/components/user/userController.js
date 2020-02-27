const userService = require('./userService')

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);

        } catch (error) {
            res.status(500).json('Houve um erro ao retornar os usuarios');
        }
    },

    async setUser(req, res) {
        try {
            await userService.setUser(req.body.user);
            res.status(200).json('Usuario cadastrado com sucesso e esta sendo enviado um email para voce como recibo de cadastro');

        } catch (error) {
            res.status(500).json(error);
        }
    }
}
