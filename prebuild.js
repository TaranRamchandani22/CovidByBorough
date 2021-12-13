
var fs = require("fs-extra");




//fs.rmdirSync("../build");
const dir = 'build';

// delete directory recursively
if (fs.existsSync(dir)) {
fs.rmdirSync(dir, { recursive: true });

console.log(`${dir} is deleted!`);
}

try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}
}
catch (err) {
  console.error(err)
}

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
