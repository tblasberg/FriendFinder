var friendsData = require("../data/friends");

app.get("/api/survey", function(req, res){
    res.json(friendsData);
});