const router = require('express').Router();
const userRoute = require("./user.router");

router.get("/", (req, res) => {
    res.send("asd");
})

router.use('/user', userRoute)

module.exports = router
