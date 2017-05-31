const { db } = require('../db.config');

function getTasks (req, res) {
  db.query('SELECT * from tasks')
    .then(function (rows) {
      res.status(200).json({tasks: rows});
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getTasksByParentId (req, res) {
  db.query(`SELECT * from tasks WHERE parentId=${req.params.parent_id}`)
    .then((data) => {
      res.status(200).json({tasks: data});
    })
    .catch(function (error) {
      console.log(error);
    });
}

function addTask (req, res, next) {
  db.one('INSERT INTO tasks(body, parentId)' + 'VALUES(${body}, ${parentId}) RETURNING id', req.body)
    .then((data) => {
      res.status(200)
      .json({
        status: 'success',
        message: 'Inserted new task',
        id: data.id
      })
    })
    .catch(err => {        
        return next(err);
    });
}

function updateTask (req, res, next) {
  db.none('UPDATE tasks set body=$1, parentId=$2 WHERE id=$3', [req.body.body, req.body.parentId,req.params.id] )
    .then( () => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated task',
          id: Number(req.params.id)
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function deleteTask (req, res, next) {
  db.result('DELETE from tasks where id = $1', req.params.id)
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
  getTasks: getTasks,
  getTasksByParentId: getTasksByParentId,
  addTask: addTask,
  updateTask: updateTask,
  deleteTask: deleteTask
};
