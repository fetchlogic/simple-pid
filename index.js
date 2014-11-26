var fs      = require('fs-extra');
var running = require('running');

module.exports = {
  lock: function(name, callback) {
    var filename = '/var/run/' + name + '.pid';

    // Checks if PID file exists
    if (fs.existsSync(filename)) {
      // Checks if the PID is still active
      var pid = fs.readFileSync(filename, 'utf8');

      if (running(pid)) {
        console.log('PID ' + pid + ' found in ' + filename + ' is running.');
        process.exit(1);
      }
    }

    // Writes the PID
    fs.writeFileSync(filename, process.pid);

    callback && callback();
  }
};
