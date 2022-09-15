const multer = require('multer')

const user = (req, res) => {
    res.status(200).json({
        nom: 'Víctor',
        edad: 36,
        url: req.protocol + "://" + req.get('Host') + req.originalUrl
    });
}

function uploadFile() {
    const storage = multer.diskStorage({
        destination: './public/files',
        filename: function (req, file, cb) {
          let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
          cb(null, Date.now() + extension);
        }
      });
      
      const upload = multer({ storage: storage }).single('file');
    
      return upload;
    }


module.exports = { user, uploadFile }

