// const bluebird = require('bluebird');
// const pgp = require('pg-promise')({promiseLib: bluebird});
// const dbCredentials = require('../config').DB[process.env.NODE_ENV];
// const db = pgp(dbCredentials);

const { db } = require('../db.config');


function getLists (req, res) {
  db.query('SELECT * from lists')
    .then(function (rows) {
      res.status(200).json({lists: rows});
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getList (req, res) {
  db.query(`SELECT * from lists WHERE id=${req.params.id}`)
    .then(function (data) {
      res.status(200).json({list: data});
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addList (req, res, next) {
  db.one('INSERT INTO lists(listName)' + 'VALUES(${listName}) RETURNING id', req.body)
    .then((data) => {
      res.status(201)
      .json({
        status: 'success',
        message: 'Inserted new list',
        id: data.id
      })
    })
    .catch(err => {        
        return next(err);
    });
}

function updateList (req, res, next) {
  db.none('UPDATE lists set listName=$1 WHERE id=$2', [req.body.listName, req.params.id] )
    .then( () => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Updated list',
          id: Number(req.params.id)
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteList (req, res, next) {
  db.result('DELETE from lists where id = $1', req.params.id)
  .then( (data) => {
      if (data.rowCount === 0) {
        res.status(404)
        .json({
          status: 'success',
          message: `Removed ${res.rowCount} list`
        });
      }
      else {
        res.status(200)
        .json({
          status: 'success',
          message: `Removed ${res.rowCount} list`
        });
      }
  })
  .catch(function (err) {
    return next(err);
  });
}

module.exports = {
  getLists: getLists,
  getList: getList,
  addList: addList,
  updateList: updateList,
  deleteList: deleteList
};
