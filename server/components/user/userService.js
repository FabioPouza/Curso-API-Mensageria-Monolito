const axios = require('axios');
const userDao = require('./userDao');
const mailer = require('../email/emailService');

module.exports = {
    async getUsers() {
        const rawUsers = await userDao.getUsers();

        const users = { users: rawUsers, time: new Date() };


        return users;
    },

    async setUser(user) {
        try {
            await userDao.setUser(user);

            axios.post('http://localhost:3001/v1/emails', {
                data: user
            })
            // await mailer.sendEmail(user);
        } catch (error) {
            throw error;
        }
    }
}