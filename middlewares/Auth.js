const { verifyToken, responseMessage } = require('../helpers')
const { AuthToken } = require('../models')


async function Authorization(req, res, next) {
  try {
    const auth_token = req.headers['auth_token']

    if (!auth_token) return responseMessage(res, 400, 'Token not found');


    const isTokenExisting = await AuthToken.findOne({ token: auth_token });

    const isValidToken = verifyToken(auth_token);

    if (!isValidToken) return responseMessage(res, 401, 'Unauthorized')

    next();

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Error in authorization')
  }
}

module.exports = Authorization;