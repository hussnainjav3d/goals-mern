const { urlencoded } = require("express");
const express = require(`express`);
const dotenv = require(`dotenv`).config();
const { errorHandler } = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

const app = express();

// Adding middle ware to accept request body data
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api/goals", require("./routes/goalRouter.js"));

// Override default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is up and running at ${port}`));
