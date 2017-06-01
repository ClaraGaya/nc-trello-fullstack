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
            t.none('CREATE TABLE tasks(id SERIAL PRIMARY KEY, body varchar(255) NOT NULL, parentId int NOT NULL)'),

            // insert records into tables;
            t.none("INSERT INTO lists(listName) VALUES ('To Do'),('In progress'),('Done'),('Delete')"),
            t.none("INSERT INTO tasks(body,parentId) VALUES ('Test Controllers', 2),('Set up test db', 3),('Test actions', 1),('Create NorthTrello logo', 1)"),

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

describe('GET /api/lists/:id', () => {
    it('returns list by id', (done) => {
        request(ROOT)
            .get('/lists/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
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

describe('PUT /api/list/:id', () => {
    it('Updates a list', (done) => {
        request(ROOT)
            .put('/list/3')
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

describe('DELETE /api/list/:id', () => {  
    it('deletes a row in table lists with the id passed', (done) => {
        request(ROOT)
            .delete('/list/4')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.rowCount).to.eql(1);
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
                expect(res.status).to.equal(404);
                done();
            });
    });
});

describe('GET /api/tasks', () => {
    it('returns all tasks', (done) => {
        request(ROOT)
            .get('/tasks')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe('GET /api/lists/:id/tasks', () => {
    it('returns all tasks that belong to specific list given the list id as a parameter in the url', (done) => {
        request(ROOT)
            .get('/lists/1/tasks')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.tasks[0]).to.be.an('object');
                expect(res.body.tasks[0].id).to.be.a('number');
                expect(res.body.tasks[0].parentid).to.be.a('number');
                expect(res.body.tasks[0].parentid).to.equal(1);
                expect(res.body.tasks[0].body).to.be.a('string')
                done();
            });
    });
});

describe('POST /api/task', () => {
    it('adds a new row to table tasks', (done) => {
        request(ROOT)
            .post('/task')
            .type('json')
            .send({
                "body": "Add a new task",
                "parentId": "1"
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
                expect(res.body.parentId).to.be.a('number');
                expect(res.body.parentId).to.eql(1);
                done();
            });
    });
});

describe('PUT /api/task/:id', () => {
    it('Updates a task', (done) => {
        request(ROOT)
            .put('/task/5')
            .type('json')
            .send({
                "body": "Update the recently added task",
                "parentId": "2"
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                expect(res.body.id).to.be.a('number');
                expect(res.body.id).to.eql(5);
                done();
            });
    });
});

describe('DELETE /api/task/:id', () => {  
    it('deletes a row in table tasks with the id passed', (done) => {
        request(ROOT)
            .delete('/task/5')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.rowCount).to.eql(1);
                done();
            });
    });
    it('handles errors when the id passed doesnt exist', (done) => {
        request(ROOT)
            .delete('/task/9999')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                done();
            });
    });
    it('handles errors when the id passed is not correct', (done) => {
        request(ROOT)
            .delete('/task/x999')
            .type('json')
            .end((err, res) => {
                expect(res.status).to.equal(422);
                done();
            });
    });
});