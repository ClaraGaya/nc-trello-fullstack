process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const config = require('../config');
const PORT = config.PORT[process.env.NODE_ENV];
const ROOT = `http://localhost:${PORT}/api`;

require('../../server');

before(() => {
    // connect to db
    const { db, pgp } = require('../db.config');
    // drop tables and create them again
    db.tx(t => {
        return t.batch([
            // drop all tables;
            t.none('DROP TABLE IF EXISTS lists'),
            t.none('DROP TABLE IF EXISTS tasks'),

            // create all tables;
            t.none('CREATE TABLE lists(id SERIAL PRIMARY KEY, listName varchar(50) NOT NULL)'),
            t.none('CREATE TABLE tasks(id SERIAL PRIMARY KEY, body varchar(255) NOT NULL, parentListID int NOT NULL)'),

            // insert records into tables;
            t.none("INSERT INTO lists(listName) VALUES ('To Do'),('In progress'),('Done'),('Delete')"),
            t.none("INSERT INTO tasks(body,parentListID) VALUES ('Test Controllers', 2),('Set up test db', 3),('Test actions', 1),('Create NorthTrello logo', 1)"),

        ]);
    })
    .then(() => {
        console.log('*** DATABASE TESTS RESEEDED ***');
    })
    .catch(error => {
        console.log('FAILED:', error);
    })
    .finally(pgp.end);
});
describe('GET /api/', () => {
    it('returns the status ok', (done) => {
        request(ROOT)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.equal('OK');
                done();
            });
    });

});
describe('GET /api/lists', () => {
    it('returns lists', (done) => {
        request(ROOT)
            .get('/lists')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });

});

describe('POST /api/list', () => {
    it('adds a new row to table lists', (done) => {
        request(ROOT)
            .post('/list')
            .type('json')
            .send({
                "listName": "Testing"
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
                done();
            });
    });
});

describe('PUT /api/list', () => {
    it('Updates a list', (done) => {
        request(ROOT)
            .put('/lists/3')
            .type('json')
            .send({
                "listName": "Review"
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
                done();
            });
    });
});

describe('DELETE /api/lists/:id', () => {
    
    it('deletes a row in table lists with the id passed', (done) => {
        request(ROOT)
            .delete('/lists/4')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
    it('handles errors when the id passed doesnt exist', (done) => {
        request(ROOT)
            .delete('/lists/9999')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            });
    });
    it('handles errors when the id passed is not correct', (done) => {
        request(ROOT)
            .delete('/lists/x999')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(422);
                done();
            });
    });
});


