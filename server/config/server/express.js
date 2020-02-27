const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
let app = express();

app.use(bodyParser.json({ limit: '100mb' }));

consign({ cwd: 'server' })
    .include('routes')
    .into(app);

module.exports = app;

