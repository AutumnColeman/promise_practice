var fs = require('fs');

var filename = process.argv[2];
try {
  var buffer = fs.readFileSync(filename);
  var content = buffer.toString();
  console.log(content.toUpperCase());
} catch (error) {
  console.log('Something went wrong.');
  console.log('Because: ', error.message);
}
