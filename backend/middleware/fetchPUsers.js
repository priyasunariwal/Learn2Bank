const JWT_SECRET = 'Coolcool';
var jwt = require('jsonwebtoken');

const fetchPUsers = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).send({ error: 'Please authenticate again' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    console.log('Token payload:', data); 

    req.pusers = data.pusers;
   
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({ error: 'Token is not valid' });
  }
};

module.exports = fetchPUsers;