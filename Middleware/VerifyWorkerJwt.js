const jwt = require('jsonwebtoken');
const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(' ')[1];


  jwt.verify(token, process.env.ACCESS_TOKEN_WORKER, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); 
    }

    req.user = {
      userId: decoded.UserInfo._id,
      email: decoded.UserInfo.Email,
    };

    next();
  });
};

module.exports = verifyJWT;
