const express = require('express');
const routes = require("./routes");
const app = express();

routes(app);

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`todo list RESTful API server started on: ${port}`);