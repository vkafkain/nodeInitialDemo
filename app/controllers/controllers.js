const fetch = require('cross-fetch')

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
const pokemon = (req, res) => {
    const { id } = req.params;
    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(res => {
        if (res.status >= 400) {
        throw new Error("400: Bad response from server");
    }
    return res.json();
  })
  .then(data => {
    res.send({
                name: data.name,
                height: data.height,
                weight: data.weight
        
    });
}).catch(err => {
    console.error(err);
  });
};


module.exports = { user, uploadPost, time, pokemon }

