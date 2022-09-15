const { Router } = require('express');
const router = Router();
const { user, upload } = require('../controllers/controller');

//user
router.get('/user', user);

//upload
router.post('/upload', upload);

module.exports = router;