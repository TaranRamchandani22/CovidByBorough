const fs = require('fs');

let neighborhoods = [];

let peeps_csv = fs.readFileSync('data/totalData.csv', 'utf8');
let peeps = peeps_csv.split("\n");

peeps.forEach(function(peep) {
  let neighborhood_info = peep.split(';');//split based on the ;
  let neighborhood = {};
  neighborhood['zip'] = neighborhood_info[1];
  neighborhood['allHouseholdIncome'] = neighborhood_info[2];
  neighborhood['caseRate'] = neighborhood_info[3];
  neighborhood['vacinationRate'] = neighborhood_info[4];
  neighborhood['allHouseholdIncome'] = neighborhood_info[5];
  neighborhood['percentLatino'] = neighborhood_info[6];
  neighborhood['percentAsianNonHispanic'] = neighborhood_info[7];
  neighborhood['percentWhiteNonHispanic'] = neighborhood_info[8];
  neighborhood['percentOtherEthnicity'] = neighborhood_info[9];
  neighborhood['percentEthnicityUnkown'] = neighborhood_info[10];
  neighborhood['blackNonHispanic'] = neighborhood_info[11];

/*
***HOW ARE WE HANDLING RACE?
should we do an if statement if a certain neiborhood does not contain a certain race percentage?
  */
  neighborhoods.push(neighborhood);
});

fs.writeFileSync('totalData.json', JSON.stringify(neighborhoods), 'utf8');//we shoulf puy yhid in the data file

//fs.writeFileSync('data/potter.json', JSON.stringify(characters), 'utf8');
