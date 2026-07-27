const express = require("express");

const app = express();
const PORT = 3000;

// Dummy Data
const students = [];

for (let i = 1; i <= 100; i++) {
    students.push({
        id: i,
        name: `Student ${i}`
    });
}

app.get("/students", (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const results = students.slice(startIndex, endIndex);

    res.json({
        page,
        limit,
        totalRecords: students.length,
        totalPages: Math.ceil(students.length / limit),
        data: results
    });

});

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
