const router = require('express').Router();
const {getLists, getList, addList, updateList, deleteList} = require('../../server/controllers/lists');
const {getTasks, getTasksByParentId, addTask, updateTask, deleteTask} = require('../../server/controllers/tasks');

router.get('/', function (request, response) {
  response.status(200).send({
    status: 'OK'
  });
});


router.get('/lists', getLists);
router.get('/lists/:id', getList);
router.post('/list', addList);
router.put('/list/:id', updateList);
router.delete('/list/:id', deleteList);
router.get('/tasks', getTasks);
router.get('/lists/:id/tasks', getTasksByParentId);
router.post('/task', addTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


module.exports = router;
