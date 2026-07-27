exports.getUsers = (req, res) => {

    let result = [...users];

    if (req.query.search) {

        result = result.filter(user =>
            user.name
                .toLowerCase()
                .includes(req.query.search.toLowerCase())
        );

    }

    if (req.query.city) {

        result = result.filter(
            user => user.city === req.query.city
        );

    }

    if (req.query.sort === "age") {

        result.sort((a, b) => a.age - b.age);

    }

    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 2;

    const start = (page - 1) * limit;

    const end = start + limit;

    res.json({

        total: result.length,

        page,

        totalPages: Math.ceil(result.length / limit),

        data: result.slice(start, end)

    });

};
