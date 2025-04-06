require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": 'root',
    "password": 'ngoc21062001',
    "database": 'test_db',
    "host": 'localhost',
    "port": 3307,
    "dialect": 'mysql',
    "timezone": "+07:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};