const Router = require('express');
const router = new Router();

const recordController = require('./../controllers/recordController');

router.get('/', recordController.getRecords);
router.post('/', recordController.addRecord);
router.delete('/:id', recordController.removeRecord);
router.post('/:id', recordController.updateUserData);

module.exports = router;
