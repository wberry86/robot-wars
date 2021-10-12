var playerName = window.prompt("What is your name?");
var playerHealth = 30;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Pixel"];
var enemyHealth = 20;
var enemyAttack = 12;

// console.log(enemyNames, enemyAttack, enemyHealth);

var fight = function (enemyName) {
  // repeat and execute as long as the enemy robot is still alive
  while (enemyHealth > 0 && playerHealth > 0) {
    // window.alert("Welcome to Robot Wars!");

    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose"
    );
    // console.log(promptFight);
    if (
      promptFight === "skip" ||
      promptFight === "SKIP" ||
      promptFight === "Skip"
    ) {
      var confirmSkip = window.confirm("Are you sure you want to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log("playermoney", playerMoney);
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemys health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player for winning
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check players health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 20;
  fight(enemyNames[i]);
}
