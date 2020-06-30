const router = require('express').Router();
const testController = require('../controllers/testController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.get('/token', testController.token);
router.get('/select', authenticateJWT, testController.select);
router.post('/insert', authenticateJWT, testController.insert);

module.exports = router;
