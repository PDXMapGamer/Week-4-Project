//TODO Import express, cors, pg, dotnev.
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//TODO Initialise express, configure dotenv, tell express to use json, cors.
const app = express();
app.use(express.json());
app.use(cors());
//TODO Set up database pool with values from .env file.
dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
//TODO Set up port to listen and root route.
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
});
app.get("/", (request, response) => {
  response.json({ message: "You are currently at the root route" });
});
//TODO Create READ and CREATE route, use SQL to do what we need.
app.get("/get-data", async (request, response) => {
  const query = await db.query(`SELECT * FROM guests `);
  response.json(query.rows);
});

app.post("/send-data", async (request, response) => {
  const username = request.body.username;
  const email = request.body.email;
  const favAnimal = request.body.favourite_animal;
  const feedback = request.body.feedback;
  const query = await db.query(
    `INSERT INTO guests(username, email, favourite_animal, feedback)
    VALUES ($1, $2, $3, $4)`,
    [username, email, favAnimal, feedback]
  );
  response.json({ message: `Data has been added to the database` });
});
