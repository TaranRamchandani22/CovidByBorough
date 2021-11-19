const fs = require('fs');
const ejs = require('ejs');

let neiborhood_info = fs.readFileSync('data/potter.json', 'utf8');//1. read JSON object and store it in character info
let index_template = fs.readFileSync('views/index.ejs', 'utf8');//2. reads views/index.ejs, and in the file, there is js that outputs the data in the propper way, loads template

let index_html = ejs.render(index_template, {//renders data into template
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(neiborhood_info)
});

fs.writeFileSync('build/index.html', index_html, 'utf8'); //saves the index.html file