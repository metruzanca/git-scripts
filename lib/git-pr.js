const execSync = require('child_process').execSync;
const run = (command) => execSync(command, { stdio: 'pipe' }).toString().trim();

const directory = run('basename $(pwd)');

try { run('git status'); }
catch (e) {
  console.log(`${directory} is not a git repository.`);
  process.exit(1);
}

const remoteUrl = run(`git remote get-url origin`);

if (!remoteUrl.includes('azure')) {
  console.log(`${directory} is not an azure repository.`);
  process.exit(1);
}

const branch = run(`git rev-parse --abbrev-ref HEAD`)

let org, project, repo;

//git@ssh.dev.azure.com:v3/agencywithin/AWPL/poc-fe
if (remoteUrl.startsWith('git@')) {
  [org, project, repo] = remoteUrl.split('/').slice(-3);
}

//https://agencywithin@dev.azure.com/agencywithin/AWPL/_git/poc-fe
if (remoteUrl.startsWith('https')) {
  [org, project, /*_git*/, repo] = remoteUrl.split('/').slice(-4);
}

const prUrl = `https://dev.azure.com/${org}/${project}/_git/${repo}/pullrequestcreate?sourceRef=${branch}`;

console.log(`Opening PR page for ${branch} of ${directory} in browser.`);

switch (process.platform) {
  case 'win32':
    run(`start "" "${prUrl}"`);
    break;
  case 'linux':
  case 'darwin':
  default:
    run(`open ${prUrl}`);
    break;
}
