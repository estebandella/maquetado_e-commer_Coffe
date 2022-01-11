const express = require('express');
const router = express.Router(); 
const mainController = require('../controllers/mainControllers');


router.get('/',mainController.index);
router.get('/:id',mainController.detail);
// router.get('/login',mainController.login);

// router.get('/detail',mainController.detail);

module.exports = router;