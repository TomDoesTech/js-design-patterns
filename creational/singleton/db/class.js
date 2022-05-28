const mongoose = require("mongoose");

const DB_ENDPOINT = "mongodb://localhost:27017/myapp";

/*
 * Implement a DB connection using a class-based singleton
 */

class Database {
  static instance;
  static count = 0;

  constructor() {
    mongoose.connect(DB_ENDPOINT).then(() => {
      console.log("Connected to database");
    });
  }

  static getInstance() {
    if (this.instance) {
      console.log("Returning instance");
      return this.instance;
    }
    console.log("creating instance");
    this.instance = new Database();

    this.count = this.count + 1;
    return this.instance;
  }
}

const db = Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
Database.getInstance();
