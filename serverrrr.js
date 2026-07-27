const express = require("express");
const rateLimit = require("express-rate-limit");

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use(logger);

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: "Too many requests."
});

app.use(limiter);

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server Running");
});
