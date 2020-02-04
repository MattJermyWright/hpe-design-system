// Copies Netlify's _redirects file to NextJS's build directory ./out
const fs = require('fs');

const file = '_redirects';
const buildDir = './out';
const destination = `${buildDir}/${file}`;

fs.copyFile(file, destination, err => {
  if (err) throw err;
  console.log(`${file} successfully copied to ${destination}`);
});
