if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const bluebird = require('bluebird');
const pgp = require('pg-promise')({ promiseLib: bluebird });
const dbCredentials = require('./config').DB[process.env.NODE_ENV] || process.env.DATABASE_URL;
const db = pgp(dbCredentials);

module.exports = {
    db: db,
    pgp: pgp
};