const express = require('express');
const ejs = require('ejs')
const chalk = require('chalk');
let app = express();
const PORT_NUMBER = 8088;

app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static("images"));

app.listen(PORT_NUMBER, function (req, res) {
    console.log(`Server is running on ${chalk.blue(`http://localhost:${PORT_NUMBER}`)}`)
});

app.get("/", function (req, res) {
    res.render("index.html");
})

app.get("/what-i-do-for-fun", function (req, res) {
    res.render("hobbies.html");
})