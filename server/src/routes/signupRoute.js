const { getDbConnection } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require('uuid');
const { sendMail } = require('../util/sendMail');

const JWT_SECRET = 'jdwfgierifgeribweifberifb1082jrgo4u9vurnu48ybdifb38fbbwhdb38yb4htbiehfb48ygb4ygbf';

const signupRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection("react-auth-db");

    const user = await db.collection("users").findOne({ email });
    if (user) {
      // alert(`User already present. Try logging in with the same username`);
      res.sendStatus(409);
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    /** VERIFICATION EMAIL ADDITION */
    const verificationString = uuid();
    /** VERIFICATION EMAIL ADDITION */

    const startingInfo = {
      bio: "",
      networth: "",
    };

    /** VERIFICATION EMAIL ADDITION, Note: Added only the verificationString*/
    const result = await db.collection("users").insertOne({
      email,
      passwordHash,
      info: startingInfo,
      isVerified: false,
      verificationString,
    });
    /** VERIFICATION EMAIL ADDITION */

    const { insertedId } = result;

    /** VERIFICATION EMAIL ADDITION */
    /**
     * Note: Make sure you have a look at the verification link which I am using here!
     */
    try {
      await sendMail({
        to: email,
        from: 'shrish.dollin1@gmail.com',
        subject: 'Please verify your email',
        text: `
          Thanks for signing up! To verify your email, click here:
          http://localhost:5173/verify-email/${verificationString}
        `
      })
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
    /** VERIFICATION EMAIL ADDITION */

    try {
      const token = await new Promise((resolve, reject) => {
        jwt.sign(
          {
            id: insertedId,
            email,
            info: startingInfo,
            isVerified: false,
          },
          JWT_SECRET,
          {
            expiresIn: "2d",
          },
          (err, token) => {
            if (err) {
              reject(err);
            }
            // console.log(token);
            // res.status(200).send(token);
            resolve(token);
          }
        );
      });

      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to generate the token." });
    }
  },
};

module.exports = {
  signupRoute,
};
