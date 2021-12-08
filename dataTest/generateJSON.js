const fs = require('fs');

let neighborhoods = {};
let arrayZipCodes = ["10001","10002","10003","10004","10005","10006","10007","10009","10010","10011","10012","10013","10014","10016","10017","10018","10019","10021","10022","10023","10024","10025","10026","10027","10028","10029","10030","10031","10032","10033","10034","10035","10036","10037","10038","10039","10040","10044","10065","10069","10075","10128","10280","10282"]
let arrayZipData = [];
let peeps_csv = fs.readFileSync('totalData.csv', 'utf8');
let peeps = peeps_csv.split("\n");

peeps.forEach(function(peep) {
  let neighborhood_info = peep.split(',');//split based on the ,
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

  neighborhoods[neighborhood_info[1]] = neighborhood;
});
//neighborhood_info[1]+"="+neighborhood)
//neighborhood_info[1]+"={"+neighborhood+"}"
fs.writeFileSync('totalData.json', JSON.stringify(neighborhoods), 'utf8');//we shoulf puy yhid in the data file

//arrayZipCodes.forEach(function(i,index){
  for(i of arrayZipCodes){
  fs.writeFileSync(i+'.json',JSON.stringify(neighborhoods[i]),'utf8');
}
//});


//fs.writeFileSync('data/potter.json', JSON.stringify(characters), 'utf8');
