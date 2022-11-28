const {Router} = require('express');
const cors = require('cors');
const {uploadPost, user, time, pokemon, error404} = require('../controllers/controllers');
const {cacheControl, authentification} = require('../middlewares/middlewares');
const router =  Router();

//http://localhost:3000/user
router.get('/user', user);

//http://localhost:3000/upload
router.post('/upload', uploadPost, (req, res) => {
    console.log(req.file);
    res.send('uploaded');
});

//http://localhost:3000/time
router.post('/time', cors(), cacheControl, authentification, time);

//http://localhost:3000//pokemon/{id}
router.get('/pokemon/:id', pokemon);

//rutas no especificadas
router.get("/*", error404);
router.post("/*", error404)
router.put("/*", error404)
router.delete("/*", error404)


module.exports = router;