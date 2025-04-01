import express from "express"
import pool from "../db.js"
import bcrypt from "bcrypt"

const router = express.Router()

router.get("/", async (req, res) => {

    res.render('newuser.njk', {
    
    })
})

router.post('/', async (req, res) => {
    const { name, password } = req.body

    bcrypt.hash(password, 10, async(err, hash) => {
        // här får vi nu tag i lösenordets hash i variabeln hash
        console.log(hash)
        
        const [result] = await pool.promise().query('INSERT INTO login (name, password) VALUES (?, ?)', [name, hash])
    })
  
   
   res.redirect("/login")
   
})

export default router