const { readFileSync } = require('fs');
const { resolve } = require('path');
const run = require('../lib/run');

const identityFile = resolve(__dirname, '..', 'identities.json');
let identities;

try {
  identities = JSON.parse(readFileSync(identityFile, { encoding: 'utf8' }));
} catch (error) {
  console.log("Identities file not setup");
  process.exit(1);
}

let [identityName] = process.argv.slice(2);
if (!identityName || identityName === 'default') {
  identityName = identities.default;
}

const identity = identities[identityName];

if (!identity) {
  console.log(`Identity ${identityName} doesn't exist`);
  process.exit(1);
}

run(`git config user.name ${identity.name}`);
run(`git config user.email ${identity.email}`);
console.log(`Now committing as '${identity.name} - ${identity.email}'`);
