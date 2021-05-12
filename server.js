//import package libary javascript
const express = require("express");
const cors = require("cors");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();

//setup middteware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/components"),
    defaultLayout: "main_layout.html",
    extname: "html",
  })
);

//routing
app.get("/", (req, res) => {
  res.render("home.html");
});
app.get("/shop", (req, res) => {
  res.render("shop.html");
});
app.get("/product", (req, res) => {
  res.render("product.html");
});
app.get("/chekout", (req, res) => {
  res.render("chekout.html");
});
app.get("/contact", (req, res) => {
  res.render("contact.html");
});
app.get("/register", (req, res) => {
  res.render("register.html");
});
app.get("/login", (req, res) => {
  res.render("login.html");
});
//port listener
app.listen(8000, () => console.log("server berjalan diport 8000"));
