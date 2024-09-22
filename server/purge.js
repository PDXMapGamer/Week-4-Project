import { db } from "./server.js";

db.query(`DELETE FROM guests`); //!Deletes all data in the table, seed it after to get the default dummy data
