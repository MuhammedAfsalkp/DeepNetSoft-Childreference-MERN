const express = require('express');
const catController = require('../controllers/cat-controller')



const router = express.Router();

router.get('/:cid', catController.getCat);
router.get('/test', catController.Test);

// router.post('/create', catController.postCat);
// router.post('/childAdd', catController.postChild);

module.exports = router;