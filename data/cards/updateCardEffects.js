const fs = require('fs');

function getFuncName(filename) {
  const nameParts = filename.split('-');
  const formattedName = nameParts.reduce((acc, part, i) => {
    if (i !== 0) {
      const firstLetter = part.slice(0, 1);
      const remainingLetters = part.slice(1);
      acc += `${firstLetter.toUpperCase()}${remainingLetters}`;
    }
    else {
      acc += part;
    }
    return acc;
  }, '');
  return formattedName;
}

function onFileContent(filename, content) {
  const filenameNoFileType = filename.replace('.ts', '');
  const funcName = getFuncName(filenameNoFileType);
  let updatedContent = content.replace('export ', '');
  updatedContent += `
  
  module.exports = { ${funcName} };

  `;
  const writeOut = `./output/${filenameNoFileType}.js`;
  fs.writeFile(writeOut, updatedContent, function(err) {
    if (err) {
      console.error('error writing updated content', err);
      return;
    }
    console.log('successfully wrote file to: ', writeOut);
  });
}

function readFiles(dirname, onFileContent) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      console.error(`error reading dir: ${dirname}`, err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          console.error(`error reading file: ${filename}`, err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

readFiles('./card-effects/', onFileContent);