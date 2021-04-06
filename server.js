const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
let app = express();
const compression = require('compression');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;

const error = (message) => {
    console.error(message);
    process.exit(1);
};

app.use('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.use(require('./routes/index'))



app.listen(port, '0.0.0.0', (err) => {
    if (err) { return error(err); }
    return console.info(
      `==> 😎 Listening on port ${port}.
        Open http://0.0.0.0:${port}/ in your browser.`
    );
});
