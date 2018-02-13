//random ability scores
let abilityScores = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (let i = 0; i <= 5; i++) { //loops through array six times
  let num = abilityScores[Math.floor(Math.random() * abilityScores.length)]; //gets random number from array
  console.log(num);
}


//Character Sheet
