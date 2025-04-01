import express, { Router } from "express"
//import pool from "..db.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("index.njk",
    { title: "Qvixter", message: "Best service, legit." }
  )
})

router.get("/loggedin", (req, res) =>{

if (req.session.loggedin = true) {
  res.render("loggedin.njk")
} else{
  res.redirect("/")
}

})

router.get("/logout", (req, res) =>{
  
  get.session.loggedin = false
  res.redirect("/")

})

export default router