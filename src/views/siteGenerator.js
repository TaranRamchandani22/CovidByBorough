const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('../../data/totalData.json', 'utf8');
let microData = fs.readFileSync('../../data/totalMicroData.json', 'utf8');

let indexTemplate = fs.readFileSync('index.ejs', 'utf8');
let aboutTemplate = fs.readFileSync('about.ejs', 'utf8');
let microTemplate = fs.readFileSync('micro.ejs', 'utf8');
//let microData = fs.readFileSync('../../data/' + i + '.json', 'utf8');
let arrayZipCodes = [10001,10002,10003,10004,10005,10006,10007,10009,10010,10011,10012,10013,10014,10016,10017,10018,10019,10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,10031,10032,10033,10034,10035,10036,10037,10038,10039,10040,10044,10065,10069,10075,10128,10280,10282];
let zipCodes = [];

let data =JSON.parse(microData);
for(let i in data){
 zipCodes[i-1] = data[i].zip;
}
//let allData=JSON.parse(microData);
/*
arrayZipCodes.forEach(function(i,index){
//for (i of arrayZipCodes) {
  newDisplayData.push(fs.readFileSync('../../data/' + i + '.json', 'utf8'))
});
*/

for(let i =0;i<zipCodes.length;i++){
  globalData=data[i+1]
}

let indexHTML = ejs.render(indexTemplate, {
  filename: __dirname + 'index.ejs',
  data: JSON.parse(microData),
  globalDara: globalData
});

let aboutHTML = ejs.render(aboutTemplate, {
  filename: __dirname + 'about.ejs',
});

//console.log("ALL DATA: "+microData);
//console.log("DISPLAY DATA: "+JSON.parse(displayData));

/*
for(let i of microData){
  let microHTML = ejs.render(microTemplate, {
    filename: __dirname + 'micro.ejs',
    data: i,
    totalMicroData: microData
  });
<<<<<<< Updated upstream
  fs.writeFileSync('../../build/'+i+'.html',microHTML,'utf8')
=======
  fs.writeFileSync('../../build/'+i+'.html',microHTML,'utf8');
>>>>>>> Stashed changes
}
*/


for(let i =0;i<zipCodes.length;i++){
  let microHTML =ejs.render(microTemplate, {
    filename: __dirname + 'micro.ejs',
    data: JSON.parse(microData),
    totalMicroData: data[i+1]
  });
  fs.writeFileSync('../../build/'+zipCodes[i]+'.html',microHTML,'utf8')
}

fs.writeFileSync('../../build/index.html', indexHTML, 'utf8');
fs.writeFileSync('../../build/about.html', aboutHTML, 'utf8');
//fs.writeFileSync('../../src/images', 'IMG_7102.jpg');
