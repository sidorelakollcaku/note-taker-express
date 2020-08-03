var express = require("express");

//Setting  up express
var app = express();
var PORT = process.env.PORT || 3000;

//Allowing json parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());


//Routes
require("./routes/routes")(app);



app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})