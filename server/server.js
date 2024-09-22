import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening at PORT ${PORT}`);
});
app.get("/", (request, response) => {
  response.json({ message: "You are currently at the root route" });
});

app.get("/get-data", async (request, response) => {
  try {
    const query = await db.query(`SELECT * FROM guests `);
    response.json(query.rows);
  } catch {
    response.json({ message: "Failed to get data from the database" });
  }
});

app.post("/send-data", async (request, response) => {
  const username = request.body.username;
  const email = request.body.email;
  const favAnimal = request.body.favourite_animal;
  const feedback = request.body.feedback;
  try {
    const query = await db.query(
      `INSERT INTO guests(username, email, favourite_animal, feedback)
    VALUES ($1, $2, $3, $4)`,
      [username, email, favAnimal, feedback]
    );
    response.json({ message: `Data has been added to the database` });
  } catch {
    response.json({ message: `Failed to add data to the database` });
  }
});
