
var fs = require("fs-extra");

const dir = 'build';
if (fs.existsSync(dir)) {
fs.rmdirSync(dir, { recursive: true });

}
