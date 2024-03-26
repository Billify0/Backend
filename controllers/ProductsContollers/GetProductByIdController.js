const { Product, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')

async function getProductById(req, res) {
  try {
    const { productId } = req.body;

    const product = await Product.findOne({ _id: productId });

    if (!product) return responseMessage(res, 400, 'No such product');

    return responseMessage(res, 200, 'Product fetched successfully', { product });

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error getting product')
  }
}

module.exports = getProductById;