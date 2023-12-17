const  { ObjectId } = require('mongodb');
const  jwt = require('jsonwebtoken');
const  { getDbConnection } = require('../db');

const JWT_SECRET = 'jdwfgierifgeribweifberifb1082jrgo4u9vurnu48ybdifb38fbbwhdb38yb4htbiehfb48ygb4ygbf';

const verifyEmailRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { verificationString } = req.body;
        const db = getDbConnection('react-auth-db');
        const result = await db.collection('users').findOne({
            verificationString,
        });

        if(!result) {
            return res.status(401).josn({message: "Email verification failed!" });
        }

        const { _id: id, email, info } = result;
        await db.collection('users').updateOne({
            _id: id
        }, {
            $set: { isVerified: true}
        });

        jwt.sign({ id, email, isVerified: true, info}, JWT_SECRET, {expiresIn: '2d'}, (err, token) => {
            if(err) {
                return res.sendStatus(500);
            }
            return res.status(200).json({ token });
        });
    }
}

module.exports = {
    verifyEmailRoute,
}