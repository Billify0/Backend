const { Product, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')

async function updateProduct(req, res) {
  try {
    const { productId, newName, newPrice, newCategory } = req.body;

    const product = await Product.findOne({ _id: productId });

    if (!product) return responseMessage(res, 400, 'No such product');

    const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, {
      $set: {
        productName: newName,
        price: newPrice
        ,
        category: newCategory
      }
    })


    if (updatedProduct)
      return responseMessage(res, 200, 'Product updated successfully');
    else
      return responseMessage(res, 400, 'Product not updated ');

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error updating product')
  }
}

module.exports = updateProduct;