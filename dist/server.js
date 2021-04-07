"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = 1338;
// Middlewares
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
// Routes
app.use(routes_1.default);
app.use(function (req, res) {
    res.status(404).json({ "message": "Página no encontrada" });
});
app.listen(PORT, function () {
    return console.info("==> \uD83D\uDE0E Listening on port " + PORT + ".\n\t\t\tOpen http://0.0.0.0:" + PORT + "/ in your browser.");
});
// app.listen(PORT:number, '0.0.0.0':string);
// app.listen(PORT:number, '0.0.0.0':string, 
// 	(err:string): void => {
// 		if (err) { return console.log(err); }
// 		return console.info(
// 			`==> 😎 Listening on port ${PORT}.
// 				Open http://0.0.0.0:${PORT}/ in your browser.`
// 		);
// });
