if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
const PORT = require('./server/config').PORT[process.env.NODE_ENV] || process.env.PORT;


const express = require('express');
const app = express();
const apiRoutes = require('./server/routes/api');
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());
app.use('/api', apiRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

app.use(function (err, req, res, next) {
    if (err.code === 422) {
        return res.status(422).json({ error: err.message });
    }
    if (err.code === 404) {
        return res.status(404).json({ error: err.message });
    }
    if (err.code === '22P02') {
        return res.status(422).json({ status: 'Not Found' });
    }
    // error 500
    if (err.code === '23503') {
        return res.status(422).send({ status: 'Not Found' });
    }
    next(err);
});
