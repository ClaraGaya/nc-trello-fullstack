if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const express = require('express');
const app = express();
const config = require('./server/config');
const PORT = config.PORT[process.env.NODE_ENV];
const apiRoutes = require('./server/routes/api');
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
app.use('/api', apiRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

