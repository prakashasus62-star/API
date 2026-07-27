module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (token !== "Bearer 12345") {

        return res.status(401).json({
            message: "Unauthorized"
        });

    }

    next();

};
