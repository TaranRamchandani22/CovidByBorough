
var fs = require("fs");

const dir = 'build';
if (fs.existsSync(dir)) {
   fs.rmdirSync(dir, { recursive: true });

}
