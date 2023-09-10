const { Product } = require('../models');

async function deleteProductAuthorization(req, res, next) {
  try {
    const { id } = req.params;
    const currentUserId = req.user.id;
    const currentUserRole = req.user.role;

    const findDeleteProduct = await Product.findOne({ where: { id } });

    if (!findDeleteProduct) {
      throw new Error('notfounddeleteproduct');
    }

    if (
      findDeleteProduct.authorId !== currentUserId &&
      currentUserRole !== 'admin'
    ) {
      throw new Error('Forbidden');
    }

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  deleteProductAuthorization,
};
