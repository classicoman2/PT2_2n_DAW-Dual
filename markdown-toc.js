var toc = require('markdown-toc');
var fs = require('fs');

//Read the file inside a variable
var data = fs.readFile('README.MD', 'utf8', function(err, data) {
  //Create the table of contents
  var text = toc(data).content;
  fs.appendFile('table_of_contents.txt', text, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});


