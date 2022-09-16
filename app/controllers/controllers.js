//user
const user = (req, res) => {
    res.status(200).json({
        nom: 'Víctor',
        edad: 36,
        url: req.protocol + "://" + req.get('Host') + req.originalUrl
    });
}

//upload
const uploadPost = (req, res) => {
    res.status(201).json({
        message: "File uploaded!",
    });
};

module.exports = { user, uploadPost }

