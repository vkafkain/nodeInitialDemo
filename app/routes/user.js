const { Router } = require('express');
const userRouter = Router();

userRouter.get('/', (req, res) => {  
    const url =  req.protocol + "://" + req.get('Host') + req.originalUrl
    const data = {
        nom: "Víctor",
        edad: 36,
        url: `${url}`
    };
    res.json(data);
});

module.exports = userRouter;