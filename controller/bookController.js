var bookSchema = require('../models/Book');


const saveData = (req, res, next) => {
    bookSchema.create(req.body, (err, post) => {
        if (err) {
            return next(err)
        } else {
            res.json(post)
        }
    })
}




const getAllBook = (req, res, next) => {
    bookSchema.find({}, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json(result)
        }
    })
}


const getSingleBook = (req, res, next) => {
    bookSchema.findById(req.params.id, (err, result) => {
        if (err) {
            return next(err);
        } else {
            res.json(result)
        }
    })
}


const updateBook = (req, res, next) => {
    bookSchema.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json(result)
        }
    })
}


const deleteBook = (req, res, next) => {
    bookSchema.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json(result)
        }
    })
}


module.exports = {
    saveData,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
}