let serverless = require("serverless-http");
let express = require("express");
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("index.html");
});

export const handler = serverless(app);