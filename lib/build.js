var exec = require('child_process').exec;
var path = require('path');

exec('rm -rfv ' + path.join(path.resolve('.'), 'docs', '*') + ' && hugo && sw-precache --root=docs && git add -A', function(error, stdout, stderr) {
  console.log('Building...');
  if (error !== null) {
    console.error('Error building site.');
    return;
  }
  console.log('Site built at /docs.');
});
