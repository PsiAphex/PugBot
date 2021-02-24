/* eslint-disable no-unused-vars */
module.exports = {};
const DatabaseClient = require('./structures/Database');
module.exports.init = async(client) => {
    const Client = new DatabaseClient();
    const channels = Client.createDatabase(process.env.DB_NAME || 'base', 'channels', 'channels');

    await Client.connect();
    console.log('DB CONNECTED');
    client.db = Client;
};
