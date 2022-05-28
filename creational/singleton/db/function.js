const mongoose = require("mongoose");

const DB_ENDPOINT = "mongodb://localhost:27017/myapp";

/*
 * Implement a DB connection using a factory function
 */

function database() {
  let instance;
  let count = 0;

  async function connect() {
    const db = await mongoose.connect(DB_ENDPOINT);

    console.log("Connected to DB");

    return db;
  }

  async function getInstance() {
    count++;
    console.log(`Get instance count ${count}`);

    if (instance) return instance;

    console.log("No instance, creating db connection");

    instance = await connect();

    return instance;
  }

  return {
    getInstance,
    count,
  };
}

const db = database();

async function run() {
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
  await db.getInstance();
}

run();
