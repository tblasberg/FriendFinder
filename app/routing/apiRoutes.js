var friends = require("../data/friends");
var fs = require('fs');



module.exports = function (app){
    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });    


    app.post("/api/friends", function(req, res){

        var newFriend = req.body;
        var newFriendScores = req.body.scores;
        var matchFriend = {
            name: "",
            photo: "",
            difference: 5000
        }
        for (var i = 0; i < friends.length; i++){
            var friendDifference = 0;
            for (var x = 0; x <friends[i].scores.length; x++){
                friendDifference += Math.abs(parseInt(friends[i].scores[x]) - parseInt(newFriendScores[x]))
            }        
            if(friendDifference < matchFriend.difference){
                matchFriend.name = friends[i].name;
                matchFriend.photo = friends[i].photo;
                matchFriend.difference = friendDifference
            }
        }
        friends.push(newFriend);

        res.json(matchFriend);

        // fs.appendFile('friends.js', surveyFriend, function (err) {
        //     if (err) throw err;
        //     console.log('New friend added to friends.js through the api route!');
        //   });        
    });

}