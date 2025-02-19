// ANCHOR state 🧠

let bank = 100

const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

// ANCHOR logic/actions ⚙️

function drawAllPlayers() {
  drawPlayersTeam2()
  drawPlayersTeam1()
}

function bothTeamSkillPoints() {
  console.log("Team 1 points " + totalSkillPoints1());
  console.log("Team 2 points " + totalSkillPoints2());
}

function displayLoseWindow() {
  if (bank == 0) {
    window.alert("YOU LOSE!!! YOUR'RE A LOSER!!! YOU'RE BROKE!!! HAHAHAHAHAHAHAHAHAHAH😈😈😈")
    bank = 100
  }
}

function changeTeamNumber() {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    player.teamNumber = getRandomTeam()
  }

  drawAllPlayers()

}

function getRandomTeam() {
  const randomTeamNumber = Math.round(Math.random()) + 1

  return randomTeamNumber

  console.log(randomTeamNumber);

}

function totalSkillPoints1() {

  let total = 0

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      total += player.skill
    }
  }
  return total
}

function totalSkillPoints2() {

  let total = 0

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 2) {
      total += player.skill
    }
  }
  return total
}
// NOTE half of all the skill points are 484

function bet5Team1() {
  if (bank >= 5) {
    if (totalSkillPoints1() > 484) {
      bank += 5
    } else {
      bank -= 5
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function bet5Team2() {
  if (bank >= 5) {
    if (totalSkillPoints2() > 484) {
      bank += 5
    } else {
      bank -= 5
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function bet25Team1() {
  if (bank >= 25) {
    if (totalSkillPoints1() > 484) {
      bank += 25
    } else {
      bank -= 25
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function bet25Team2() {
  if (bank >= 25) {
    if (totalSkillPoints2() > 484) {
      bank += 25
    } else {
      bank -= 25
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function bet100Team1() {
  if (bank >= 100) {
    if (totalSkillPoints1() > 484) {
      bank += 100
    } else {
      bank -= 100
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function bet100Team2() {
  if (bank >= 100) {
    if (totalSkillPoints2() > 484) {
      bank += 100
    } else {
      bank -= 100
    }
  }
  displayLoseWindow()
  drawBankBalance()
  console.log(bank);

}

function betItAllTeam1() {
  if (totalSkillPoints1() > 484) {
    bank += bank
  } else {
    bank = 0
  }
  displayLoseWindow()
  drawBankBalance()
}

function betItAllTeam2() {
  if (totalSkillPoints2() > 484) {
    bank += bank
  } else {
    bank = 0
  }
  displayLoseWindow()
  drawBankBalance()
}

// ANCHOR draw

function drawPlayersTeam1() {
  let emojis = ''

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 1) {
      emojis += player.emoji
    }
  }
  const drawPlayerTeam1Elem = document.getElementById('team1')
  drawPlayerTeam1Elem.innerText = emojis

  console.log(emojis);

}


function drawPlayersTeam2() {
  let emojis = ''

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player.teamNumber == 2) {
      emojis += player.emoji
    }
  }

  const drawPlayerTeam2Elem = document.getElementById('team2')
  drawPlayerTeam2Elem.innerText = emojis

  console.log(emojis);

}

function drawBankBalance() {
  const drawBankBalanceElem = document.getElementById('balance')
  drawBankBalanceElem.innerText = bank.toString()
}

console.log(bank);
console.log(bothTeamSkillPoints());


// ANCHOR page load
drawAllPlayers()
