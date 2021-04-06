const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan")

const cors = require('cors');
let app = express();
const compression = require('compression');

const {logGenerate} = require('./midlewares/log.midleware');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 1338 : process.env.PORT;



app.use('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));



//MIDLEWARES
app.use( logGenerate );


//ROUTES
app.use(require('./routes/index'))

app.use( (req, res) => {
    res.status(404).json({ "message": "Página no encontrada" });
})

app.listen(port, '0.0.0.0', (err) => {
    if (err) { return error(err); }
    return console.info(
      `==> 😎 Listening on port ${port}.
        Open http://0.0.0.0:${port}/ in your browser.`
    );
});
