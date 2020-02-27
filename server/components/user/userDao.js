let users = [
    'Fabio',
    'Pedro'
];

module.exports = {
    async getUsers() {
        return users;
    },

    async setUser(user) {
        users.push(user);
    }
}