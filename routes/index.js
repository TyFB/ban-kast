const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>You messed up somewhere go back and check!</h1>');
});

module.exports = router;