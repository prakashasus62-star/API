exports.createUser = (req, res) => {

    const { name, age, city } = req.body;

    if (!name || !age || !city) {

        return res.status(400).json({
            message: "All fields required"
        });

    }

    const user = {

        id: users.length + 1,

        name,

        age,

        city

    };

    users.push(user);

    res.status(201).json(user);

};
