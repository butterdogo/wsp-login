import "dotenv/config"
import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import logger from "morgan"
import bodyParser from "body-parser"
import session from "express-session"
import indexRouter from "./routes/index.js"
import loginRouter from "./routes/login.js"
import newuserRouter from "./routes/newuser.js"



const app = express()
const port = 3000

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})



app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { sameSite: true }
}))

app.use(logger("dev"))
app.use("/", indexRouter)
app.use("/login", loginRouter)
app.use("/newuser", newuserRouter)



app.get("/", (req, res) => {
  if (req.session.views) {
    req.session.views++
  } else {
    req.session.views = 1
  }
  res.render("index.njk",
    { title: "Test", message: "Funkar?", views: req.session.views }
  )
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})