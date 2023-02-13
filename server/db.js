const pg = require("pg");
require("dotenv").config();

const client = new pg.Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB
});

const connect = () => {
    client.connect()
    .then(() => console.log("PostgreSQL connected"))
    .catch((err) => console.error("Error connecting to PostgreSQL: ", err))
};

module.exports = {
    connect,
    client
};