// keys.js logic switch for prod or dev environment, NODE_ENV heroku specific?
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
