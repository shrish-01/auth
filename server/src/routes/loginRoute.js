const { getDbConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET='jdwfgierifgeribweifberifb1082jrgo4u9vurnu48ybdifb38fbbwhdb38yb4htbiehfb48ygb4ygbf';

const loginRoute = {
  path: '/api/login',
  method: 'post',
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection('react-auth-db');
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return res.sendStatus(401);
    }

    const { _id: id, isVerified, passwordHash, info } = user;
    const isCorrect = await bcrypt.compare(password, passwordHash);

    if (isCorrect) {
      try {
        const token = await new Promise((resolve, reject) => {
          jwt.sign({ id, isVerified, email, info }, JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
            if (err) {
              reject(err);
            }
            resolve(token);
          });
        });

        res.status(200).json({ token });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to generate the token' });
      }
    } else {
      res.sendStatus(401);
    }
  },
};

module.exports = {
  loginRoute,
};