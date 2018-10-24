module.exports.default = (args) => new Promise((done, fail) => {
  const fs = require('fs');
  fs.appendFile('./src/config.js', 'module.exports.AUTO_UPDATE_ENABLED = true;', err => {
    if (err) console.log(`errored enabling auto update: ${err}`);
  });
  done(true);
});
