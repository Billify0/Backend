const { User, AuthToken } = require('../../models')

const { comapreHashPassword, createToken, responseMessage } = require('../../helpers')

const { isEmail } = require('validator')

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    if (!isEmail(email)) return responseMessage(res, 400, "Invalid email format");

    const user = await User.findOne({ email: email });
    console.log('');

    if (!user) return responseMessage(res, 400, "User not registered");

    if (await comapreHashPassword(password, user.password)) {
      const token = createToken({ id: user._id });

      const authToken = new AuthToken({
        userId: user._id,
        token: token
      })

      await authToken.save();

      return responseMessage(res, 200, "Login successful", {
        userId: user._id,
        token: token
      })
    } else {
      return responseMessage(res, 400, "Invalid password")
    }

  } catch (error) {
    console.log(error, "User not Logged in");
    return responseMessage(res, 500, "Login failed");
  }
}

module.exports = loginUser;