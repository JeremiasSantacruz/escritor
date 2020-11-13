module.exports = (app) => {
    app.post("/user", (req, res) => {
        res.send({
            message: `Your user ${req.body.email} is register`
            })
        })
}