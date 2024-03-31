const { Bill, AuthToken } = require('../../models')
const { responseMessage } = require('../../helpers')

async function GetAllBillsController(req, res) {
  try {
    const auth_token = req.headers['auth_token']

    const user = await AuthToken.findOne({ token: auth_token }).populate('userId');

    if (!user) return responseMessage(res, 400, 'Invalid Auth Token');

    const user_id = user.userId._id;

    const bills = await Bill.find({ userId: user_id }).sort({ createdAt: -1 });

    if (!bills)
      return responseMessage(res, 200, 'No bills found', []);
    else
      return responseMessage(res, 200, 'bills found', { bills });

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error getting bills')
  }
}
module.exports = GetAllBillsController;