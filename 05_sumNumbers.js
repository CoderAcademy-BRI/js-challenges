// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test

function calculateTotalScore(scores) {
    // calculates the total of the array of scores tha is passed in
    let totalScore = 0;
    for (let score of scores) {
        totalScore += score;
    }
    return totalScore;
}

function findWinner(players) {
    let winner = players[0].name;
    if ( calculateTotalScore(players[0].scores) < calculateTotalScore(players[1].scores)) {
        winner = players[1].name;
        return winner;
    }
    return winner;
}

module.exports = {
    findWinner
}