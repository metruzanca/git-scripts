const execSync = require('child_process').execSync;
const run = (command) => execSync(command, { stdio: 'pipe' }).toString().trim();

module.exports = run;