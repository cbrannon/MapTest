var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static("./public"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});