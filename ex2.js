var fsp = require('fs-promise');

var filename = process.argv[2];
var outputFilename = process.argv[3];


fsp.readFile(filename)
  .then(function(buffer) {
    var content = buffer.toString().toUpperCase();
    return fsp.writeFile(outputFilename, content);
  })
  .catch(function(err) {
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
  });
