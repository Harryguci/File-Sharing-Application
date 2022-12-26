const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ Title: "Hello world !!" });
});

module.exports = router;
