const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session")
const passport = require("passport");

/* Coonfigure dotenv*/
require("dotenv").config();

/* Require routers */
const indexRroutes = require("./routes/indexRroutes");

/* Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Setup view engine */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

/* Setup test routes */
app.get("/test", (req, res) => {
    res.send("Hello World!");
});

/* Setup session */
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
/* Home page */
app.use("/", indexRroutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})