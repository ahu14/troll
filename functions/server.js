let serverless = require("serverless-http");
let express = require("express");
let app = express();
let router = express.Router();

app.use(express.static(__dirname + '../../public'));

router.get('/', (req, res) => {
    res.send("index.html");
});

<<<<<<< HEAD:netlify/functions/server.js
app.use("/.netlify/functions/server", router);
module.exports.handler  = serverless(app);
=======
export const handler = serverless(app);
>>>>>>> parent of a211401 (change the export to module.exports):functions/server.js
