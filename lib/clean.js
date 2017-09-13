var exec = require('child_process').exec;
var path = require('path');

exec('rm -rf ' + path.join(path.resolve('.'), 'content') + ' && mkdir content && mkdir ' + path.join('content', 'patterns'), function(error, stdout, stderr) {
  console.log('Initializing new project...');
  if (error !== null) {
    console.error('Error creating folder structure.');
    return;
  }
  exec ('hugo new ' + path.join('patterns', 'pattern.md') + ' && hugo new _index.md && hugo new print-version.md --kind print-version', function(error, stdout, stderr) {
    if (error !== null) {
      console.error('Error creating new project files.');
      return;
    }
    exec ('cat ' + path.join('themes', 'infusion', 'data', 'README_BLANK.md') + ' > README.md', function(error, stdout, stderr) {
      if (error !== null) {
        console.error('Error initializing README file.');
        return;
      }
      console.log('New project ready. See patterns/pattern.md to get started.');
    });
  });
});
