const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("Hello from NV!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));