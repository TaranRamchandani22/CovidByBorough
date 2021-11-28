const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('../../data/totalData.json', 'utf8');
let siteTemplate = fs.readFileSync('index.ejs', 'utf8');
let arrayZipCodes = ["10001,10002,10003,10004,10005,10006,10007,10009,10010,10011,10012,10013,10014,10016,10017,10018,10019,10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,10031,10032,10033,10034,10035,10036,10037,10038,10039,10040,10044,10065,10069,10075,10128,10280,10282"];
let newDisplayData = [];

arrayZipCodes.forEach(function(currentI,index){
  newDisplayData.push(fs.readFileSync('../../data/'+currentI+'.json', 'utf8'))
});
let indexHTML = ejs.render(siteTemplate, {
  filename: __dirname + 'index.ejs',
  data: JSON.parse(displayData)
});

fs.writeFileSync('../../build/index.html', indexHTML, 'utf8');

let microTemplate = fs.readFileSync('micro.ejs', 'utf8');

for(i of arrayOfStateNames){
  let microdisplayData = fs.readFileSync('../../data/'+i+'.json', 'utf8');
  let microHTML = ejs.render(microTemplate, {
    filename: __dirname + 'micro.ejs',
    data: JSON.parse(microdisplayData)
  });
    fs.writeFileSync('../../build/' + [i] + '.html', microHTML, 'utf8');
}


let aboutTemplate = fs.readFileSync('about.ejs', 'utf8');
let aboutHTML = ejs.render(aboutTemplate, {
  filename: __dirname + 'about.ejs',
});
fs.writeFileSync('../../build/about.html', aboutHTML, 'utf8');
