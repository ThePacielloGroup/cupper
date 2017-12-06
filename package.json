{
  "name": "cupper",
  "version": "0.1.0",
  "description": "A documentation builder for inclusive designers",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "hugo server --baseURL http://localhost:1313",
    "clean": "node lib/clean.js",
    "build": "node lib/build.js",
    "update": "node lib/update.js",
    "a11y": "(npm list pa11y-ci || npm install -g pa11y-ci) && pa11y-ci --sitemap http://localhost:1313/sitemap.xml --config lib/.pa11yci"
  },
  "pre-commit": [
    "build"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ThePacielloGroup/cupper.git"
  },
  "author": "Heydon Pickering <heydon@heydonworks.com> (http://www.heydonworks.com)",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ThePacielloGroup/cupper/issues"
  },
  "homepage": "https://github.com/ThePacielloGroup/cupper#readme",
  "devDependencies": {
    "pre-commit": "^1.2.2",
    "sw-precache": "^5.2.0"
  }
}
