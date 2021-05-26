const createSort = require('./create-sort');
const loadConfig = require('./load-config');
module.exports = (config = loadConfig()) => createSort(config);
