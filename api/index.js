import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({msg: "Hello there"});
});

app.post("/", (req, res) => {
    res.send({msg: `you posted ${JSON.stringify(req.body)}`});
});


app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log("connected successfully");
});