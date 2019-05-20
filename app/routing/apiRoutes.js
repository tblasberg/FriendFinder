var friendsData = require("../data/friends");

app.get("/api/friends", function(req, res){
    res.json(friendsData);
});