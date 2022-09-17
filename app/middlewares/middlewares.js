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
let cacheControl= (req, res, next)=>{
    if (req.method == 'POST') {
      res.setHeader("Cache-control", "no-cache");
  } else {
      res.setHeader("Cache-control", "no-store");
  }
  next();
  }

module.exports = {upload, cacheControl};