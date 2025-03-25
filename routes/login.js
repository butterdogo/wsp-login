import express, { Router } from "express"
import { createPool } from "mysql2"
import bcrypt from "bcrypt"
import pool from "../db.js"


const router = express.Router()

router.get("/", async (req, res) =>{

    res.render("login.njk",{
        
    })
  })


router.post("/", async (req, res) => {
  const {username, password } = req.body

  const [dbpassword] = await pool.promise().query('Select password FROM login WHERE name = ?', [username])
    
  if(dbpassword != ""){
  bcrypt.compare(password, dbpassword[0].password, function(err, result) {
      if (result == true){
        console.log("rätt")
        res.redirect("/")
      }
      else{
        console.log("fel")
        res.redirect("/login")
      }
  });
  
  } else{res.redirect("/login")}




})



export default router