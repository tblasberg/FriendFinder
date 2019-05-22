var express = require("express");
// var cors = require('cors')
var app = express();

var path = require("path");

// app.use(cors())
// var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())
 


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

