import express from "express";
import { clients } from "./fakeData.js";

const app = express();

app.get('/clients', (req, res) => {
    res.json(clients);
})

app.listen(3000, () => {
    console.log('running on 3000');
})