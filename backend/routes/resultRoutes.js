const express = require('express');
const router = express.Router();
const {getResults,postResults} = require('../controller/resultController');


router.route('/').get(getResults);
router.route('/').post(postResults);

module.exports = router;