// Adds 10 to the scores of players in an array.
// each player will have a numeric id and score.

function addScore(players) {
    // parameter 'i' added anonymous function for position of element
    return players.map(function(x, i){
        // initializes new score value
        new_score = x.score
        // add 10 to score of first 3 players
        if (i < 3) {
            new_score = x.score + 10;
        }
        // returns the player to the map function
        return {
            id: x.id,
            score: new_score
        }
    });
}

module.exports = addScore;