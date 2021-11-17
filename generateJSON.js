const fs = require('fs');

let neighborhoods = [];

//let peeps_csv = fs.readFileSync('data/Characters.csv', 'utf8');

//let peeps = peeps_csv.split("\n");

peeps.forEach(function(peep) {
  let neighborhood_info = peep.split(';');//split based on the ;
  let neighborhood = {};
  neighborhood['zip'] = neighborhood_info[1];
  neighborhood['income'] = neighborhood_info[2];
  neighborhood['numCases'] = neighborhood_info[3];
  neighborhood['caseRate'] = neighborhood_info[4];
  neighborhood['numVacinations'] = neighborhood_info[5];
  neighborhood['vacinationRate'] = neighborhood_info[5];

/*
***HOW ARE WE HANDLING RACE?
should we do an if statement if a certain neiborhood does not contain a certain race percentage?
  */

});

//fs.writeFileSync('data/potter.json', JSON.stringify(characters), 'utf8');
