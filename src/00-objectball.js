function gameObject() {
 return {
  home: {
   teamName: "Brooklyn Nets",
   colors: ["black", "white"],
   players: [
    { playerName: "Alan Anderson", number: "0", shoe: "16", points: "22", rebounds: "12", assists: "12", steals: "3", blocks: "1", slamDunks: "1" },
    { playerName: "Reggie Evans", number: "30", shoe: "14", points: "12", rebounds: "12", assists: "12", steals: "12", blocks: "12", slamDunks: "7" },
    { playerName: "Brook Lopez	", number: "11", shoe: "17", points: "17", rebounds: "19", assists: "10", steals: "3", blocks: "1", slamDunks: "15" },
    { playerName: "Mason Plumlee", number: "1", shoe: "19", points: "26", rebounds: "12", assists: "6", steals: "3", blocks: "8", slamDunks: "5" },
    { playerName: "Jason Terry", number: "31", shoe: "15", points: "19", rebounds: "2", assists: "2", steals: "4", blocks: "11", slamDunks: "1" }
   ]
  },
  away: {
   teamName: "Charlotte Hornets",
   colors: ["turquoise", "purple"],
   players: [
    { playerName: "Jeff Adrien", number: "4", shoe: "18", points: "10", rebounds: "1", assists: "1", steals: "2", blocks: "7", slamDunks: "2" },
    { playerName: "Bismak Biyombo", number: "0", shoe: "16", points: "12", rebounds: "4", assists: "7", steals: "7", blocks: "15", slamDunks: "10" },
    { playerName: "DeSagna Diop", number: "2", shoe: "14", points: "24", rebounds: "12", assists: "12", steals: "4", blocks: "5", slamDunks: "5" },
    { playerName: "Ben Gordon", number: "8", shoe: "15", points: "33", rebounds: "3", assists: "2", steals: "1", blocks: "1", slamDunks: "0" },
    { playerName: "Brendan Haywood", number: "33", shoe: "15", points: "6", rebounds: "12", assists: "12", steals: "22", blocks: "5", slamDunks: "12" }
   ]
  }
 }
}

function numPointsScored(playerName) {
 let players = gameObject().home.players.concat(gameObject().away.players);
 for (let i = 0; i < players.length; i++) {
  if (players[i].playerName === playerName) {
   return players[i].points;
  }
 }
 return "Player not found";
}



function shoeSize(playerName) {
 let players = gameObject().home.players.concat(gameObject().away.players);
 for (let i = 0; i < players.length; i++) {
  if (players[i].playerName === playerName) {
   return players[i].shoe;
  }
 }
 return "Player not found";
}


function teamNames() {
 let teams = gameObject();
 return [teams.home.teamName, teams.away.teamName];
}



function playerNumbers(teamName) {
 let team = null;
 if (gameObject().home.teamName === teamName) {
  team = gameObject().home;
 } else if (gameObject().away.teamName === teamName) {
  team = gameObject().away;
 } else {
  return "Team not found";
 }

 let numbers = [];
 for (let player of team.players) {
  numbers.push(player.number);
 }
 return numbers;
}




function playerStats(playerName) {
 let players = gameObject().home.players.concat(gameObject().away.players);
 for (let i = 0; i < players.length; i++) {
  if (players[i].playerName === playerName) {
   return `numbers : ${[players[i].number]}, shoe: ${[players[i].shoe]}, points: ${[players[i].points]}, rebounds: ${[players[i].rebounds]}, assists: ${[players[i].assists]}, steals: ${[players[i].steals]}, blocks: ${[players[i].blocks]}, slamDunks: ${[players[i].slamDunks]} `;
  };
 }
 return "Player not found";
}



function bigShoeRebounds() {
 let players = gameObject().home.players.concat(gameObject().away.players);
 let maxShoeSize = -1;
 let playerWithMaxShoeSize;
 for (let player of players) {
  if (player.shoe > maxShoeSize) {
   maxShoeSize = player.shoe;
   playerWithMaxShoeSize = player;
  }
 }
 return playerWithMaxShoeSize.rebounds;
}

function mostPointsScored() {
 let players = gameObject().home.players.concat(gameObject().away.players);
 let maxPoints = 0;
 let playerName = "";
 for (let i = 0; i < players.length; i++) {
  if (players[i].points > maxPoints) {
   maxPoints = Math.max(players[i].points);
   playerName = players[i].playerName;
  }
 }
 return `The max point is ${maxPoints} by ${playerName}`
}

console.log(mostPointsScored())