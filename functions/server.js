let serverless = require("serverless-http");
let express = require("express");
let app = express();
let router = express.Router();

app.use(express.static(__dirname + '../../public'));

router.get('/', (req, res) => {
    res.sendFile("index.html");
});

app.use("/.netlify/functions/server", router);
module.exports.handler  = serverless(app);