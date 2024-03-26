const { Product, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')


async function deleteProduct(req, res) {
  try {
    const { productId } = req.body;

    const product = await Product.findOne({ _id: productId });

    if (!product) return responseMessage(res, 400, 'No such product');

    await Product.deleteOne({ _id: productId });

    return responseMessage(res, 200, 'Product deleted successfully');
  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error deleting product')
  }
}

module.exports = deleteProduct;