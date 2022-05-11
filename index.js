const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("hewwo >.<");
});

app.listen(42, () => console.log("running server"));