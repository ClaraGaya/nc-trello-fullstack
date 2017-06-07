const router = require('express').Router();
const {getLists, getList, addList, updateList, deleteList} = require('../../server/controllers/lists');
const {getTasks, getTasksByParentId, addTask, updateTask, deleteTask} = require('../../server/controllers/tasks');

router.route('/').get((request, response) => {
  response.status(200).send({ status: 'OK' });
});

router.route('/lists').get(getLists);
router.route('/lists/:id').get(getList);
router.route('/list').post(addList);
router.route('/list/:id').put(updateList);
router.route('/list/:id').delete(deleteList);
router.route('/tasks').get(getTasks);
router.route('/lists/:id/tasks').get(getTasksByParentId);
router.route('/task').post(addTask);
router.route('/task/:id').put(updateTask);
router.route('/task/:id').delete(deleteTask);


module.exports = router;
