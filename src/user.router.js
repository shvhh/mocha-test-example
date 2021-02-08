const router = require('express').Router();


router.get("/user1", (req, res) => {
    res.send("user1");
})

router.get('/user2', (req, res) => {
    res.send("user2");
})

module.exports = router
