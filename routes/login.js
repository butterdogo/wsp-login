import express, { Router } from "express"
import { createPool } from "mysql2"
import bcrypt from "bcrypt"
import pool from "../db.js"
import db from "../db-sqlite.js"


const router = express.Router()





router.get("/", async (req, res) =>{

    res.render("login.njk",{
        
    })
  })


router.post("/", async (req, res) => {
  const {username} = req.body
  const {password} = req.body

  const dbpassword = await db.get('Select password FROM login WHERE name = ?', username)
    
  if(dbpassword != ""){
  bcrypt.compare(password, dbpassword.password, function(err, result) {
      if (result == true){
        console.log("rätt")
        req.session.loggedin = true
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