var fsp = require('fs-promise');

var filename = process.argv[2];

fsp.readFile(filename)
  .then(function(buffer) {
    var content = buffer.toString();
    console.log(content.toUpperCase());
  })
  .catch(function(err) {
    console.log('Something went wrong lol.');
    console.log('Because: ', err.message);
  });
