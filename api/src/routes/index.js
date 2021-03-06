const { Router } = require('express');

const productRouter = require('./products');
const apiRouter = require("./api");
const sizesRouter = require("./sizes");
const userRouter = require("./users");
const orderRouter = require("./orders");
const quantityRouter = require("./quantity");

const router = Router();

router.use('/products', productRouter);
router.use("/api", apiRouter);
router.use("/sizes", sizesRouter);
router.use("/users", userRouter);
router.use("/orders", orderRouter);
router.use("/quantity", quantityRouter);


module.exports = router;