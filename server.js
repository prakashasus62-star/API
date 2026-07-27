const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = 3000;

app.use(express.json());

// Create Rate Limiter
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,                  // Maximum 5 requests
    message: {
        success: false,
        message: "Too many requests. Please try again after 1 minute."
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Apply throttling to all routes
app.use(limiter);

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Express Rate Limiting API"
    });
});

// Products Route
app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Laptop",
            price: 50000
        },
        {
            id: 2,
            name: "Mobile",
            price: 25000
        }
    ]);
});

// Login Route
app.post("/login", (req, res) => {
    res.json({
        success: true,
        message: "Login Successful"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
