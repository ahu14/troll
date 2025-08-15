let serverless = require("serverless-http");
let express = require("express");
let app = express();
let router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

module.exports.handler  = serverless(app);