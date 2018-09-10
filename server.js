const express = require('express');
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());

routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`todo list RESTful API server started on: ${port}`));