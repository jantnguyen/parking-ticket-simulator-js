// Code from https://sequelize.org/master/manual/getting-started.html
const { Sequelize } = require('sequelize');
module.exports = new Sequelize('parking', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});
