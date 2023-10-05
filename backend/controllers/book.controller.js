const BookModel = require('../models/book.model')



module.exports.getPosts = async(req, res)=>{
    const books = await BookModel.find();
      res.status(200).json(books);
    }



module.exports.setBooks = async(req, res)=>{
    const { title, author, publishedDate } = req.body;
    if (!req.body.title) {
        res.status(400).json({message: "merci d'jouter un message"})
       }
    
       const book = await BookModel.create({
        title:req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate
       });
       res.status(200).json(book)
}

module.exports.showBook = async(req, res)=>{
    const book = await BookModel.findById(req.params.id);
    if (!book) {
        res.status(400).json({message: "this book don't exist",status:400})
    }
        res.status(200).json(book);
}

module.exports.editBook = async(req, res)=>{
    const book = await BookModel.findById(req.params.id);
    if (!book) {
        res.status(400).json({message: "this book don't exist",status:400})
    }
    const updateBook = await BookModel.findByIdAndUpdate(book,
        
        req.body,{new: true})

        res.status(200).json(updateBook);
}

module.exports.deleteBook = async(req, res)=>{
    const book = await BookModel.findById(req.params.id);
    if (!book) {
        res.status(400).json({message: "this book don't exist",status:400})
    }
  
    await book.remove();
        res.status(200).json({message: "this book is delete "+ req.params.id});
}