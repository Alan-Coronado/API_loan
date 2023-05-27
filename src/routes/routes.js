const {Router} = require('express');
const router = Router();

const {processData, get} = require('../Data/data.controller');

router.get('/', get);
router.post('/', processData);

module.exports = router;