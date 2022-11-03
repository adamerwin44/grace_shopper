const { Client } = require('pg');
const { DATABASE_URL } = process.env;

const client = new Client({
    connectionString: DATABASE_URL

});
module.exports = {
    ...require("./users"),
    ...require("./products"),
    ...require("./orderItems"),
    ...require("./orders"),
  };

module.exports = { client };