const express = require('express');
const router = express.Router();
const {createStudent,getStudents} = require('../controller/studentController')

router.route('/').get(getStudents)
router.route('/').post(createStudent);

module.exports = router;