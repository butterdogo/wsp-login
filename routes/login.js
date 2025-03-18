import express, { Router } from "express"
import { createPool } from "mysql2"
//import pool from "..db.js"


const router = express.Router()

router.get("/", async (req, res) =>{

    res.render("login.njk",{
        
    })
  })


router.post("/", async (req, res) => {
  const {username, password} = req.body

  const dbpassword = await pool.promise().query('Select password FROM login WHERE name = ?', [username])

  bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    if (result == true){
      
    }
    else{

    }
});



})


export default router