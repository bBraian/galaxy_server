const express = require("express");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }))
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('running on 3000');
})

//docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest
//docker start mysql