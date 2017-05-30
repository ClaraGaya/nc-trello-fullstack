const bluebird = require('bluebird');
const pgp = require('pg-promise')({ promiseLib: bluebird });
const dbCredentials = require('./config').DB[process.env.NODE_ENV];
const db = pgp(dbCredentials);
module.exports = {
    db
};