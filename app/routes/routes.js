const {Router} = require('express');
const {uploadPost, user, time} = require('../controllers/controllers');
const {upload, cacheControl} = require('../middlewares/middlewares');
const router =  Router();



//http://localhost:3000/user
router.get('/user', user);

//http://localhost:3000/upload
router.post('/upload', upload, uploadPost, (req, res) => {
    console.log(req.file);
    res.send('uploaded');
});

////http://localhost:3000/time
router.post('/time', cacheControl, time);

module.exports = router;
