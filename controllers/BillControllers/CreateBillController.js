const { Product, AuthToken, Bill } = require('../../models')
const { responseMessage } = require('../../helpers')

// const {nanoid} = require('nanoid');

const uniqid = require('uniqid')

async function CreateBillController(req, res) {
  try {
    const auth_token = req.headers['auth_token'];
    const { products, totalPrice } = req.body

    const user = await AuthToken.findOne({ token: auth_token }).populate('userId');

    if (!user) return responseMessage(res, 400, 'Invalid Auth Token');
    const userId = user.userId._id;
    const BillId = uniqid();

    // const BillId=123456;

    const bill = await Bill.create({
      userId,
      BillId,
      products,
      totalPrice,
    });


    return responseMessage(res, 201, 'Bill Generated  Successfully', { BillId });


  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Unable to Generate Bill');
  }
}

module.exports = CreateBillController;