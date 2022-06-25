

// Game var
var score = 0;
var clickingPower = 1;

// Upgrades
var cursor = {cost: 15, amount: 0, name: "cursor", multiplier: 1};
var pandama = {cost: 100, amount: 0, name: "pandama", multiplier: 5};
var pandahouse = {cost: 1000, amount: 0, name: "pandahouse", multiplier: 10};
// var allUpgrade = [cursor, pandama, pandahouse]

// Functions
function buyUpgrade(upgradeName) {
    if (score >= upgradeName.cost) {
        score -= upgradeName.cost;
        upgradeName.amount++;
        upgradeName.cost = Math.round(upgradeName.cost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById(upgradeName.name+"cost").innerHTML = upgradeName.cost;
        document.getElementById(upgradeName.name+"s").innerHTML = upgradeName.amount;
        updateScorePerSecond();

        // console.log(upgradeName);
    }
}

function addToScore(amount) {
    score += amount;
    document.getElementById("score").innerHTML = score;
}

function scorePerSecond() {
    sps = cursor.amount*cursor.multiplier +
          pandama.amount*pandama.multiplier +
          pandahouse.amount*pandahouse.multiplier;
    return sps;
}

function updateScorePerSecond() {
    sps = scorePerSecond();
    document.getElementById("scorepersecond").innerHTML = sps;
}

function saveGame() {
    var gameSave = {
        score: score,
        clickingPower: clickingPower,
        cursor: cursor,
        pandama: pandama,
        pandahouse:pandahouse
    };
    localStorage.setItem("gameSave". JSON.stringify(gameSave));
}

function loadGame() {
    var saveGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof saveGame.score !== "undefined") score = saveGame.score;
    if (typeof saveGame.clickingPower !== "undefined") clickingPower = saveGame.clickingPower;
    if (typeof saveGame.cursor !== "undefined") cursor = saveGame.cursor;
    if (typeof saveGame.pandama !== "undefined") pandama = saveGame.pandama;
    if (typeof saveGame.pandahouse !== "undefined") pandahouse = saveGame.pandahouse;

}

window.onload = function() {
    loadGame();
    updateScorePerSecond();
};

// Auto add point
setInterval(function() {
    score += scorePerSecond();
    // score += cursor.amount * cursor.multiplier;
    // score += pandama.amount * pandama.multiplier;

    document.getElementById("score").innerHTML = score;
    document.title = score + " panda - Panda Clicker";
}, 1000); // 1000ms = 1 second

setInterval(function() {
    saveGame();
}, 30000);