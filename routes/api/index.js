const router = require('express').Router();

const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/user/:userId/friends/:friendId', userRoutes);

module.exports = router;