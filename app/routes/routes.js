const { Router } = require('express');
const router = Router();
const { user, uploadFile } = require('../controllers/controller');

//user
router.get('/user', user);

//upload
router.post('/upload', uploadFile(), (req, res) =>{
    console.log(req.file);
    res.send('ok file upload')
});





module.exports = router;