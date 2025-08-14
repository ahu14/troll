let express = require("express");
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send("index.html");
});

app.listen(3000, () => console.log('Chaos running on http://localhost:3000'));