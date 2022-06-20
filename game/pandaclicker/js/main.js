

// Game var
var score = 0;
var clickingPower = 1;

// Upgrades
var cursor = {cost: 15, amount: 0, name: "cursor", multiplier: 1};
var pandama = {cost: 100, amount: 0, name: "pandama", multiplier: 5};
var pandahouse = {cost: 1000, amount: 0, name: "pandahouse", multiplier: 10};

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

function updateScorePerSecond() {
    sps = cursor.amount*cursor.multiplier + pandama.amount*pandama.multiplier;
    document.getElementById("scorepersecond").innerHTML = sps;
}


// Auto add point
setInterval(function() {
    score += cursor.amount * cursor.multiplier;
    score += pandama.amount * pandama.multiplier;

    document.getElementById("score").innerHTML = score;
}, 1000); // 1000ms = 1 second