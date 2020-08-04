const express = require('express');

const router = express.Router();

const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.list)
router.post('/add', locationsController.save)
router.get('/delete/:id', locationsController.delete)


module.exports = router;