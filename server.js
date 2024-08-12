require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./Config/dbConn');
const bodyParser = require('body-parser');
const http = require('http');

// Cross Origin Resource Sharing

app.use(cors());


// app.use(cors({
//     origin: '*', // Allow any origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     //credentials: true // Allow cookies to be sent with requests
// }));

// Register the routes
const Routes = require('./Routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Built-in middleware to handle URL-encoded data (form data):
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for JSON
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Routes
app.use('/api/v1', Routes);

// Connect to MongoDB
connectDB();
mongoose.connection.once('open', () =>
{
    console.log('Connected to MongoDB');

    // Create an HTTP server using Express app
    const server = http.createServer(app);

    // Start the HTTP server to listen for incoming HTTP and WebSocket connections
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () =>
    {
        console.log(`Server running on port ${PORT}`);
    });
});
