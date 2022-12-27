const fs = require("fs");
const path = require("path");
function getDir(type, Folder) {
  var arr = [];
  Folder = path.join(Folder, type);

  if (Folder) {
    fs.readdirSync(Folder).forEach((file) => {
      arr.push(file);
    });
  }

  return arr;
}

module.exports = getDir;
