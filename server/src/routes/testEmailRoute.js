const { sendMail } =  require("../util/sendEmail");

const testEmailRoute = {
    path: '/api/tets-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendMail({
                to: 'shrish.dollin1+testSendGrid@gmail.com',
                from: 'shrish.dollin1@gmail.com',
                subject: 'Does this work?',
                text: 'If you are reading this, then it is working!',
            })

            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
}

module.exports = {
    testEmailRoute,
}