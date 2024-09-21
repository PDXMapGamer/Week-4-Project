//TODO  Add the SQL and seed.
//TODO Seed dummy data
import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS guests(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    favourite_animal VARCHAR(42),
    feedback TEXT
);`);

db.query(`INSERT INTO guests(username, email, favourite_animal, feedback)
VALUES ('Dummy_1', 'realmail@mail.com', 'Dog', 'This is a sample test to test features'),
('Dummy_2', 'fakemail@mail.com', 'Cat', 'lorem 50')`);
