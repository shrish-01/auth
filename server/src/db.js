const { MongoClient } = require("mongodb");

let client;

const initializeDbConnection = async () => {
  client = await MongoClient.connect('mongodb+srv://dollinshrish:lrfkoGxXkZmHoTLm@cluster0.w45n44w.mongodb.net/?retryWrites=true&w=majority');
};

const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};

module.exports = {
  initializeDbConnection,
  getDbConnection,
};
