const { loginRoute } = require('./loginRoute');
const {signupRoute} = require('./signupRoute');
const {testRoute} = require('./testRoute');
const { verifyEmailRoute } = require('./verifyEmailRoute');

const routes = [
    testRoute,
    signupRoute,
    loginRoute,
    verifyEmailRoute,
];

module.exports = {
    routes,
};