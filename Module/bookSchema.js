const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },  // 1 to 5 stars
}, { timestamps: true });

const bookSchema = new mongoose.Schema({
    bookid:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
     reviews: [reviewSchema],
})

bookSchema.methods.getAverageRating = function() {
    if (this.reviews.length === 0) return 0;
    const total = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return total / this.reviews.length;
};

const books = mongoose.model('books',bookSchema);
module.exports=books;