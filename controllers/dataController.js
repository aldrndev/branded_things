const { Product, User } = require('../models');

class DataController {
  static async addProduct(req, res, next) {
    try {
      const authorId = req.user.id;
      const { name, description, price, stock, imgUrl, categoryId } = req.body;

      const createProduct = await Product.create({
        name,
        description,
        price,
        stock,
        imgUrl,
        authorId,
        categoryId,
      });

      res.status(201).json({
        statusCode: 201,
        message: 'Product create successfully',
        data: createProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async showProducts(req, res, next) {
    try {
      const getAllProduct = await Product.findAll({
        include: User,
      });

      if (!getAllProduct) {
        throw new Error('notfoundproduct');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'Get All Product Successfully',
        data: getAllProduct,
      });
    } catch (error) {
      next(error);
    }
  }

  static async showProductDetail(req, res, next) {
    try {
      const { id } = req.params;

      const showProductDetail = await Product.findByPk(id);

      if (!showProductDetail) {
        throw new Error('notfoundproductdetail');
      }

      res.status(200).json({
        statusCode: 200,
        message: 'Get Product by Id Successfully',
        data: showProductDetail,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;

      const findDeleteProduct = await Product.findOne({
        where: {
          id,
        },
      });

      const deletedProduct = await Product.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: `${findDeleteProduct.name} success to delete`,
        data: deletedProduct,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DataController;
