const { Product, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')

async function addProduct(req, res) {
  try {
    const auth_token = req.headers['auth_token'];
    console.log(auth_token);
    const { productName, productPrice, productCategory } = req.body

    const user = await AuthToken.findOne({ token: auth_token }).populate('userId');
    if (!user) return responseMessage(res, 400, 'Unable to add product');

    const user_id = user.userId._id;


    const product = new Product({
      userId: user_id,
      productName: productName,
      price: productPrice,
      category: productCategory
    })

    await product.save()

    return responseMessage(res, 201, 'Product added successfully', { product });


  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Unable to add Product');
  }
}

module.exports = addProduct;