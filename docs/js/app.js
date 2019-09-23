/*!
 * wordup v2.0.0
 * A description for your project.
 * (c) 2019 
 * UNLICENSED License
 * http://link-to-your-git-repo.com
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(3000, () => {
  console.log('Magic is happening on port 3000');
});
