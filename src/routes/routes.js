const {Router} = require('express');
const router = Router();

const {processData} = require('../Data/data.controller');

router.post('/', processData);

module.exports = router;