const express = require('express');
const router =  express. Router();
const dotenv = require('dotenv').config();
const app = express();
// const port = 5500
const jwt = require('jsonwebtoken');
const { setBooks, getPosts, editBook, deleteBook, showBook } = require('../controllers/book.controller');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = user;
      next();
    });
  };

  app.post('/login', (req, res) => {
    console.log(req.body);
    const { username } = req.body;
    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ token });
  });

router.post("/",authenticateJWT,setBooks)
router.get("/",authenticateJWT,getPosts)
router.get("/:id",authenticateJWT,showBook)
router.put("/:id",authenticateJWT,editBook)
router.delete("/:id",authenticateJWT,deleteBook)


module.exports = router