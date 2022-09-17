//user
const user = (req, res) => {
    let url = req.protocol + "://" + req.get('Host') + req.originalUrl
    res.status(200).json({
        nom: 'Víctor',
        edad: 36,
        url: url
    });
}

//upload
const uploadPost = (req, res) => {
    res.status(201).json({
        message: "File uploaded!",
    });
};

//time
const time = (req, res) => {
    res.status(200).json({
        date: new Date().toDateString(),
        hour: new Date().getHours() + ':'+ new Date().getMinutes()+ ':'+ new Date().getSeconds()
    });
}

//pokemon


module.exports = { user, uploadPost, time }

