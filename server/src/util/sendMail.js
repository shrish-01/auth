const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey('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');

const sendMail = ({ to, from, subject, text, html }) => {
    const msg = { to, from, subject, text, html };
    return sendgrid.send(msg);
    /**
     * why are we returning this?
     * because sendgrid returns a Promise which we can use elsewhere.
     */
};

module.exports = {
    sendMail,
}