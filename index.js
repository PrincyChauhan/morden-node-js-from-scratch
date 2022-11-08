const express = require("express");
const path = require("path");
const { config, engine } = require('express-edge');
 
const app = express();

app.use(express.static("public"));

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/post", (req, res) => {
    res.render("post");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});
app.listen(3000, () => {
  console.log("App is listing on port 3000");
});
