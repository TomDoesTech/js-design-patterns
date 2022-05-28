const config = require("./config");

const host = config.get("host");

console.log("Got host", { host });
