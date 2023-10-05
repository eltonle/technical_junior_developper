const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type:String,
            required: true
        },
        publishedDate : {
            type: Date
        }
    }
)

module.exports = mongoose.model('book', bookSchema);