const path = require('path');
const db = require('better-sqlite3')(path.join(__dirname, '..', 'db', 'exoplanets.db'), { verbose: console.log });

module.exports = db;
