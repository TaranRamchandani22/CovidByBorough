const fs = require('fs');

let neighborhoodsMicroArray = [];
let peepsMicro_csv = fs.readFileSync(__dirname+'/totalData.csv', 'utf8');
let peepsMicro = peepsMicro_csv.split("\n");
 //peepsMicro = peepsMicro.slice(1,14);

peepsMicro.forEach(function(zipcode) {
  let neighborhood_info = zipcode.split(',');//split based on the ,
  let neighborhood = {};
  neighborhood['zip'] = neighborhood_info[1];
  neighborhood['caseRate'] = neighborhood_info[2];
  neighborhood['vacinationRate'] = neighborhood_info[3];
  neighborhood['allHouseholdIncome'] = neighborhood_info[4];
  neighborhood['percentLatino'] = neighborhood_info[9];
  neighborhood['percentAsianNonHispanic'] = neighborhood_info[10];
  neighborhood['percentWhiteNonHispanic'] = neighborhood_info[11];
  neighborhood['percentOtherEthnicity'] = neighborhood_info[12];
  neighborhood['percentEthnicityUnkown'] = neighborhood_info[13];
  neighborhood['percentBlackNonHispanic'] = neighborhood_info[14];

  //neighborhoodsMicroArray[neighborhood_info[1]] = neighborhood;

neighborhoodsMicroArray.push(neighborhood);
});

fs.writeFileSync('totalMicroData.json', JSON.stringify(neighborhoodsMicroArray), 'utf8');//we shoulf puy yhid in the data file
