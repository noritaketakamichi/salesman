const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Setup Logger
app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());

app.get("/api/test", async(req, res) => {
    //test
    try {
        res.send("test");
    } catch (err) {
        console.error("Error loading locations!", err);
        res.sendStatus(500);
    }
});

module.exports = app;