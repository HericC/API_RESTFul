const router = require('express').Router();

const testController = require('../controllers/testController');

router.get('/token', testController.token);
router.get('/select', testController.select);
router.post('/insert', testController.insert);

module.exports = router;
