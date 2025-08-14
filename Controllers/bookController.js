const books = require('../Module/bookSchema')


//addBooksController

exports.addBooksController = async (req, res) => {
    console.log("inside the addBook function ");
    const { bookid, title, author, description, image } = req.body;
    // console.log( bookid, title, author, description, image );

    try {
        const existingBook = await books.findOne({ bookid })
        // console.log(existingBook);
        if (existingBook) {
            res.status(406).json("The Book already exist")
        } else {
            const newBook = new books({
                bookid, title, author, description, image
            })
            await newBook.save()
            res.status(200).json(newBook)
        }

    } catch (err) {
        res.status(401).json(err);
    }

}

//getAllBooks

exports.getAllBooks = async (req, res) => {
    console.log("inside the getAllBooks function");
    try {
        const allBooks = await books.find().sort({ _id: -1 })
        res.status(200).json(allBooks)
    } catch (err) {
        res.status(401).json(err)
    }

}


//getBooksById

exports.getBooksById = async (req, res) => {
    console.log("inside the getBooksById function");
    const { id } = req.params
    try {
        const book = await books.findById(id)
        res.status(200).json(book)
    } catch {
        res.status(401).json(err)
    }

}


//getHomeBooks

exports.getHomeBooks = async (req, res) => {
    console.log("inside the getHomeBooks function");
    try {
        const bookHome = await books.find().limit(5).sort({ _id: -1 })
        res.status(200).json(bookHome)
    } catch (err) {
        res.status(401).json(err)
    }
}


// addReview

exports.addReview = async (req, res) => {
    console.log("inside the addReview function");
    const { review, username, rating } = req.body;
    // console.log(review, username, rating);
    const { id } = req.params;
    try {
        const book = await books.findById(id)
        // console.log(book);

        if (!book) {
            return res.status(404).json("Book not found");
        }

        book.reviews.push({ review, username, rating });
        await book.save();
        const avgRating = book.getAverageRating();

        res.status(200).json({
            message: "Review added successfully",
            book,
            averageRating: avgRating.toFixed(1)
        });
    } catch (err) {
        res.status(401).json(err)
    }

}

// getReview

exports.getReview = async (req, res) => {
    console.log("inside the getReview function");
    const { id } = req.params
    try {
        const book = await books.findById(id).select('reviews')
        if (!book) {
            return res.status(404).json("Book not found");
        }
        book.reviews.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        res.status(200).json(book)
    } catch {
        res.status(401).json(err)
    }
}