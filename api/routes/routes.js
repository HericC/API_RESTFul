const router = require('express').Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.get);

module.exports = router;
