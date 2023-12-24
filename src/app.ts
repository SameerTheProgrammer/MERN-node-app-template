import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("welcome from home");
});

export default app;
