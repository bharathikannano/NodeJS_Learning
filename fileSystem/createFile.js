const fs = require('fs');


fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
}); 