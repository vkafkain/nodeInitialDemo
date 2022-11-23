
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

module.exports = { cacheControl, authentification};
