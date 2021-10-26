// function to generate a random number value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fight = function (enemy) {
  console.log(enemy);
  // repeat and execute as long as the enemy robot is still alive
  while (enemy.health > 0 && playerInfo.health > 0) {
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
        window.alert(
          playerInfo.name + " has chosen to skip the fight. Goodbye!"
        );
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money);
        // window.prompt("Would you like to visit the shop?")
        break;
      }
    }

    // generata random damage based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemys health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player for winning
      playerInfo.money = playerInfo.money + 10;
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check players health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

var playerInfo = {
  name: window.prompt("What is your Robot's name?"),
  health: 100,
  attack: 10,
  money: 20,
  reset: function () {
    this.health = 100;
    this.money = 20;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
  {
    name: "Pixel",
    attack: randomNumber(10, 14),
  },
];

// add a startGame(function)
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Wars! Round " + (i + 1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      fight(pickedEnemyObj);
      // if were not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before the next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have been defeated! GAME OVER");
      // window.promt("Would you like to play again?");
      break;
    }
  }

  endGame();
};

// add an endGame(function)
// function to end the entire game
var endGame = function () {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart game
    startGame();
  } else {
    window.alert(
      "Thank you for playing Robot Wars! Come back soon if you dare!"
    );
  }
};

// add a shop(function)
var shop = function () {
  // ask player what they would like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL yout health, upgrade your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use a switch statement to carry out actions
  switch (shopOptionPrompt) {
    case "REFILL":
    case "Refill":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE":
    case "Upgrade":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;

    case "LEAVE":
    case "Leave":
    case "leave":
      window.alert("Leaving the store.");

      // do nothing so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop again to force player to pick a valid option
      shop();
      break;
  }
};

console.log(
  playerInfo.name,
  playerInfo.attack,
  playerInfo.health,
  playerInfo.money
);

startGame();
