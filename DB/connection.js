const mongoose = require('mongoose');

const connection_string = process.env.connection_string;

mongoose.connect(connection_string).then(()=>{
    console.log("book-review server is successfully connected to MongoDB");
    
}).catch((err)=>{
    console.log("MongoDB connection failed...",err);
    
})