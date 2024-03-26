const { AuthToken } = require('../../models')
const { verifyToken, responseMessage } = require('../../helpers')


async function LogoutUser(req, res) {
  const auth_token = req.headers['auth_token'];

  //   if (!refresh_token) {
  //     return responseMessage(res, 400, false, "invalid credentials", {})
  //   }

  try {

    const token = verifyToken(auth_token);

    const userid = token.id;

    const response = await AuthToken.deleteMany({ userId: userid });

    if (response) {
      return responseMessage(res, 200, "Logout Successful")
    }

  } catch (error) {
    console.log(error);
    return responseMessage(res, 400, "Logout failed")
  }


}

module.exports = LogoutUser;