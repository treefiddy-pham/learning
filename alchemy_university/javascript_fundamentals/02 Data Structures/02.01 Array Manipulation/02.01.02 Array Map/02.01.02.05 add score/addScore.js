// Adds 10 to the scores of players in an array.
// each player will have a numeric id and score.

function addScore(players) {
    return players.map(function(x){
        //anonymous function returns the player with increased score
        return {
            id: x.id,
            score: x.score + 10
        }
    });
}

module.exports = addScore;