import express, { Router } from "express"
//import pool from "..db.js"

const router = express.Router()

router.get("/", (req, res) => {
  res.render("index.njk",
    { title: "Qvixter", message: "Best service, legit." }
  )
})



export default router