const Router = require('express');
const router = new Router();

const recordController = require('./../controllers/recordController');

router.get('/', recordController.getRecords);
router.post('/', recordController.addRecord);
router.delete('/:id', recordController.removeRecord);

module.exports = router;
