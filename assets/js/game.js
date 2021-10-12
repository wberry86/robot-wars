var playerName = window.prompt("What is your name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Pixel"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames, enemyAttack, enemyHealth);

var fight = function (enemyName) {
  window.alert("Welcome to Robot Wars!");

  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose"
  );
  // console.log(promptFight);

  if (
    promptFight === "fight" ||
    promptFight === "FIGHT" ||
    promptFight === "Fight"
  ) {
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (
    promptFight === "skip" ||
    promptFight === "SKIP" ||
    promptFight === "Skip"
  ) {
    var confirmSkip = window.confirm("Are you sure you want to quit?");
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
      playerMoney = playerMoney - 2;
      console.log(playerMoney);
    } else {
      fight();
    }
  }
};


for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
// fight();
