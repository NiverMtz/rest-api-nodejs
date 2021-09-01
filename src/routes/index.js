const { Router } = require('express');
const router = new Router();

router.get('/test', (req, res) => {
    // res.json({"Title":"Hello World"});
    const data = {
        name: 'NivMtz',
        website: 'niver.mtz.github.com'
    };
    res.json(data)
});

module.exports = router;