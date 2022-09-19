const multer = require('multer');
const path = require('path');

//upload
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits:{fileSize: 50000000},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname)); 
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("Error: Wrong file type, file has to be jpeg, jpg, png or gif");
    }
}).single('images');

//time(cache-control)
const cacheControl = (req, res, next)=>{
    req.method == 'POST'? res.set("Cache-control", "no-cache") : res.set("Cache-control", "no-store");
    next();
  }

//authentification
const authentification = (req, res, next)=> {
    const {user, pass} = req.headers;
    const admin = "admin";
    const adminPass = "1234";

    if(admin !== user || adminPass !== pass) {
        res.status(401).json({
            error: "401 - Unauthorized"
        })
        return;
    }
    next();
}

module.exports = {upload, cacheControl, authentification};
