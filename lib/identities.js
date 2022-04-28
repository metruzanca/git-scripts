
// Initialize identities file

const { writeFileSync } = require('fs')
const { resolve } = require('path');
const run = require('../lib/run');

const identityFile = resolve(__dirname, '..', 'identities.json');

const defaultIdentity = 'identity'

const identities = {
  default: defaultIdentity,
  [defaultIdentity]: {
    user: run('git config --global user.name'),
    email: run('git config --global user.email'),
  }
}

writeFileSync(identityFile, JSON.stringify(identities, null, 2), { encoding: 'utf8' });
