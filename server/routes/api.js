const router = require('express').Router();
const {getLists, addList, updateList, deleteList} = require('../../server/controllers/lists');
const {getTasks, addTask, updateTask, deleteTask} = require('../../server/controllers/tasks');

router.get('/', function (request, response) {
  response.status(200).send({
    status: 'OK'
  });
});


router.get('/lists', getLists);
router.post('/list', addList);
router.put('/lists/:id', updateList);
router.delete('/lists/:id', deleteList);
router.get('/tasks', getTasks);
router.post('/task', addTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);


module.exports = router;
