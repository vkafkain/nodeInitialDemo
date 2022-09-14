const { Router } = require('express');
const router = Router();

router.get('/user', (req, res) => {   
    const data = {
        "nom": "Víctor",
        "edad": 36,
        "url": req.protocol + "://" + req.get('Host') + req.originalUrl
    };
    res.json(data);
});

module.exports = router;