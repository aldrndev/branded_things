const { verifyToken } = require('../helpers/jwt');

const authenticate = (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw new Error('Unauthorized');
    }

    const decoded = verifyToken(access_token);
    req.user = decoded; // data dari payload yang di kirim saat login

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
