
var fs = require("fs-extra");
//fs.rmdirSync("../build");
const dir = 'build';

// delete directory recursively
if (fs.existsSync(dir)) {
fs.rmdirSync(dir, { recursive: true });

console.log(`${dir} is deleted!`);
}


/*
const path = '../build/index.html'
const path2 = '../build/about.html'

for(i = 10001; i<10287; i++){
  let micro = i + ".html";
  let microPath = '../build/' + i + ".html";
  try {
    fs.unlinkSync(microPath)
  } catch(err) {
    console.error(err)
  }
}

try {
  fs.unlinkSync(path)
} catch(err) {
  console.error(err)
}

try {
  fs.unlinkSync(path2)
} catch(err) {
  console.error(err)
}

*/

//if the folder doesn't exist, make one
try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}
}
catch (err) {
  console.error(err)
}

//fs.mkdirSync("../build");

//var source = 'src/css/styles.css';

//copy css
/*try{
  fs.readFileSync(source, "utf8");
  fs.copyFileSync(source, dir);
} catch(err) {
  console.error(err)
}
 */

// copy css folder to destination
//copy images folder to destination
//copy data to destination
//copy js to destination
var source = 'src/css';
var source2 = 'images';
var source3 = 'data' ;
var source4 = 'src/js'
fs.copy(source, dir, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});

fs.copy(source2, dir, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
fs.copy(source3, dir, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});

fs.copy(source4, dir, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});













/*
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
*/
