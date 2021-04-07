import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import userRoutes from './routes'

const app = express();
const PORT:number = 1338;
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(userRoutes);

app.use( (req, res) => {
    res.status(404).json({ "message": "Página no encontrada" });
})

app.listen(PORT , () => 
	console.info(
		`==> 😎 Listening on port ${PORT}.
			Open http://0.0.0.0:${PORT}/ in your browser.`
	)

);

// app.listen(PORT:number, '0.0.0.0':string);


// app.listen(PORT:number, '0.0.0.0':string, 
// 	(err:string): void => {
// 		if (err) { return console.log(err); }
// 		return console.info(
// 			`==> 😎 Listening on port ${PORT}.
// 				Open http://0.0.0.0:${PORT}/ in your browser.`
// 		);
// });