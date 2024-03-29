const bcrypt = require('bcrypt')


async function hashPassword(password) {
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (error) {
    console.log('Error  hashing password: ', error);
  }
}

async function comapreHashPassword(password, hash) {
  try {
    const match = await bcrypt.compare(password, hash)
    return match
  } catch (error) {
    console.log('Error  hashing password: ', error);
  }
}

module.exports = {
  hashPassword,
  comapreHashPassword
}