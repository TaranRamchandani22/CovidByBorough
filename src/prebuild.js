const fs = require('fs');
fs.rmdirSync('build')

let displayImage1 = fs.readFileSync('images/IMG_7102.JPG');
let displayImage2 = fs.readFileSync('images/IMG_7103.JPG');
let displayImage3 = fs.readFileSync('images/TaranMacro.jpg');
let displayImage4 = fs.readFileSync('images/TaranMicro.jpg');

let displayData = fs.readFileSync('../data/totalData.json', 'utf8');
let indexTemplate = fs.readFileSync('index.ejs', 'utf8');
let aboutTemplate = fs.readFileSync('about.ejs', 'utf8');
let microTemplate = fs.readFileSync('micro.ejs', 'utf8');
