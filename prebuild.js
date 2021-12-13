//got help from ishan regarding what functions to include/ what completes what for building file structure
var fs = require("fs-extra");
const dir = 'build';


if (fs.existsSync(dir)) {
fs.rmdirSync(dir, { recursive: true });

}
