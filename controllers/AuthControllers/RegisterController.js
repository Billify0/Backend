const { User, AuthToken } = require('../../models')

const { hashPassword, createToken, responseMessage } = require('../../helpers')

const { isEmail } = require('validator')

async function registerUser(req, res) {
  const { email, password } = req.body;
  try {
    if (!isEmail(email)) return responseMessage(res, 400, "Invalid email format");

    const user = await User.findOne({ email: email });

    if (user) return responseMessage(res, 400, "User already exits");

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      email: email,
      password: hashedPassword
    })

    await newUser.save();

    const token = createToken({ id: newUser._id });

    const authToken = new AuthToken({
      userId: newUser._id,
      token: token
    })

    await authToken.save();

    return responseMessage(res, 201, "registration successful", {
      userId: newUser._id,
      token: token
    });

  } catch (error) {
    console.log(error, "User not Added");
    return responseMessage(res, 500, "Error in creating user");
  }
}

module.exports = registerUser;
