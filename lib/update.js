var exec = require('child_process').exec;
var path = require('path');

var themeFolder = path.join(path.resolve('.'), 'themes');
var oldTheme = path.join(themeFolder, 'cupper');

console.log('Updating...');
exec('mv '+oldTheme+' '+oldTheme+'-old-'+Date.now(), function(error, stdout, stderr) {
  if (error !== null) {
    console.error('Error saving old cupper version.');
    return;
  }
  exec ('svn export https://github.com/ThePacielloGroup/cupper/trunk/themes/cupper '+oldTheme, function(error, stdout, stderr) {
    if (error !== null) {
      console.error('SVN error exporting cupper from Github. Is SVN installed?');
      return;
    }
    console.log('Cupper updated to latest version!');
  });
});
