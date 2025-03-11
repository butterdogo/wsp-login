import express, { Router } from "express"
import pool from "..db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  
  
    res.render("index.njk", {
      
    })
  })

router.get("/login", async (req, res) =>{

    res.render("login.njk",{
        
    })

})