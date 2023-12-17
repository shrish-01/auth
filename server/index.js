const express = require('express');
const { default: mongoose } = require('mongoose');
const { initializeDbConnection } = require('./src/db');
const { routes } = require('./src/routes')
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

initializeDbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    });