var exec = require('child_process').exec;
var path = require('path');

var themeFolder = path.join(path.resolve('.'), 'themes');
var oldTheme = path.join(themeFolder, 'infusion');

exec('mv '+oldTheme+' '+oldTheme+'-old-'+Date.now(), function(error, stdout, stderr) {
  console.log('Updating...');
  if (error !== null) {
    console.error('Error saving old infusion version.');
    return;
  }
  exec ('svn export https://github.com/ThePacielloGroup/infusion/trunk/themes/infusion '+oldTheme, function(error, stdout, stderr) {
    if (error !== null) {
      console.error('SVN error exporting infusion from Github. Is SVN installed?');
      return;
    }
    console.log('Infusion updated to latest version!');
  });
});
