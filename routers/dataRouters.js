const express = require('express');
const DataController = require('../controllers/DataController');
const { deleteProductAuthorization } = require('../middlewares/authorization');
const router = express.Router();

router.post('/add', DataController.addProduct);

router.get('/all', DataController.showProducts);

router.get('/:id/detail', DataController.showProductDetail);

router.delete(
  '/:id/delete',
  deleteProductAuthorization,
  DataController.deleteProduct
);

module.exports = router;
