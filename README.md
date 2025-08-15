# Book Review App - Backend

* This is the Backend of the Book Review Board application, built with Node.js and Express.js.

# Features

# User Authentication

* Register (/api/register): Create a new account with name, email, and password.

* Login (/api/login): Authenticate user and return a JWT token.

# Books

* Add Book (POST /api/books) – Auth required

* List Books (GET /api/books) – Returns all books

* Book Details (GET /api/books/:id) – Returns single book with reviews

# Reviews

* Add Review (POST /api/books/:id/reviews) – Auth required

# Extras

* Input validation (Express Validator)

* MongoDB with Mongoose models for User, Book, Review

# Tech Stack

* Node.js

* Express.js

* MongoDB + Mongoose

* JWT

# Project Structure

backend/
├── controllers/       # Logic for auth, books, reviews
├── models/            # Mongoose schemas: User, Book, Review
├── routes/            # API route definitions
├── server.js          # Express server entry point
└── .env.example       # Sample environment variables

#  Setup Instructions

npm init -y
npm i express
npm i doteenv
npm i nodemon
npm i cors

PORT=3000
MONGO_URI=mongodb+srv://abhijithpa73:mern@cluster0.5a3ue7j.mongodb.net/brServer?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=supersecreat123

Backend will run on: https://rv-server.onrender.com

# API Endpoints

# Auth

* POST /api/register

* POST /api/login

# Books

* POST /api/books (Auth required)

* GET /api/books

* GET /api/books/:id

# Reviews

* POST /api/books/:id/reviews (Auth required)

# Sample Requests

* Register User
POST /api/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

* Login
POST /api/login
{
  "email": "john@example.com",
  "password": "123456"
}

* Add Book
POST /api/books
Authorization: Bearer <token>
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "Classic novel set in the 1920s.",
  "coverImage": "https://example.com/gatsby.jpg"
}

* Add Review
POST /api/books/:id/reviews
Authorization: Bearer <token>
{
  "rating": 5,
  "comment": "A timeless masterpiece."
}

# Deployment

* Deploy backend on Render

#  Author

* Developed by ABHIJITH P A