const express = require('express');
const router = express.Router();

const { create,read } = require('../controllers/budget');

router.post('/', create);
router.get('/', read);

module.exports = router;