const testFolder = './data/';
const fs = require('fs');

 fs.readdir(testFolder, (err, filesList) => {
  console.log(filesList);
});