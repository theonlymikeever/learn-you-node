//FIRST CHALLENGE 'HELLO WORLD'
console.log(process.argv);


//SECOND CHALLENGE 'BABY STEPS'
var result = 0;
for (var i = 2; i < process.argv.length; i++){
  result = result + +process.argv[i];
}
console.log(result);


//THIRD CHALLENGE 'MY FIRST I/O'

var fs = require('fs');

var str = fs.readFileSync(process.argv[2]);
var result = str.toString().split('\n').length - 1;
console.log(result);


//FOURTH CHALLENGE 'MY FIRST ASYNC I/O'

var fs = require('fs');
var myNumber = undefined;

fs.readFile(process.argv[2], 'utf8', finishedReading);

function finishedReading(error, fileData) {
  if (error) return console.error(error);
  myNumber = fileData.split('\n').length - 1;
  console.log(myNumber);
}


//FIFTH CHALLENGE 'FILTERED LS'
var fs = require('fs');
var path  = require('path');
var fileType = process.argv[3];

function indexDirectory(directory) {
  fs.readdir(directory, function(err, files) {
    if (err) return console.error(err);
    files.forEach(function (file) {
      if (path.extname(file).slice(1) === fileType) {
        console.log(file);
      }
    });
  });
}

indexDirectory(process.argv[2]);
