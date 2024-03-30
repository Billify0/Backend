const { Product, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')

async function getAllProducts(req, res) {
  try {
    const auth_token = req.headers['auth_token']

    const user = await AuthToken.findOne({ token: auth_token }).populate('userId');

    if (!user) return responseMessage(res, 400, 'Invalid Auth Token');

    const user_id = user.userId._id;

    const products = await Product.find({ userId: user_id }).sort({ createdAt: -1 });

    if (!products)
      return responseMessage(res, 200, 'No products found', []);
    else
      return responseMessage(res, 200, 'Products found', { products });

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error getting products')
  }
}

module.exports = getAllProducts;