var fsp = require('fs-promise');

var file1 = process.argv[2];
var file2 = process.argv[3];
var outputFile = process.argv[4];


Promise.all([fsp.readFile(file1), fsp.readFile(file2)])
  .then(function(buffers) {
    var file1Lines = buffers[0].toString().split('\n');
    var file2Lines = buffers[1].toString().split('\n');
    var allLines = [];
    file1Lines.forEach(function(line, idx) {
      allLines.push(line);
      allLines.push(file2Lines[idx]);
    });
    return fsp.writeFile(outputFile, allLines.join('\n'));
  })
  .then(function() {
    console.log('Successfully wrote the file!');
  })
  .catch(function(err) {
    console.log('Something went wrong because', err.message);
    console.log('Fix it on line: ', err.stack);
  });
