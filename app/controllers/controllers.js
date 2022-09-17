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
    let hourNow = new Date().getHours() + ':'+ new Date().getMinutes()+ ':'+ new Date().getSeconds();
    let date = new Date().toDateString()
    res.status(200).json({
        date: date,
        hour: hourNow
    });
}
module.exports = { user, uploadPost, time }

