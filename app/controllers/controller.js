

const user = (req, res) => {
    res.status(200).json({
        nom: 'Víctor',
        edad: 36,
        url: req.protocol + "://" + req.get('Host') + req.originalUrl,
    });
}

module.exports = { user }

