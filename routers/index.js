const express = require('express');
const router = express.Router();
const dataRouter = require('../routers/dataRouters');
const categoryRouter = require('../routers/categoryRouters');
const userRouter = require('../routers/userRouters');
const authenticate = require('../middlewares/authentication');

router.use('/product', authenticate, dataRouter);
router.use('/category', authenticate, categoryRouter);

router.use(userRouter);

module.exports = router;
