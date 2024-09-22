CREATE TABLE IF NOT EXISTS guests(
    id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    favourite_animal VARCHAR(42),
    feedback TEXT
);

INSERT INTO guests(username, email, favourite_animal, feedback)
VALUES ('Dummy_1', 'realmail@mail.com', 'Dog', 'This is a sample test to test features'),
('Dummy_2', 'fakemail@mail.com', 'Cat', 'lorem 50')

SELECT * FROM guests 

DELETE FROM guests

INSERT INTO guests(username, email, favourite_animal, feedback)
VALUES ('Ant1', 'realmail@mail.com', 'Ant', 'I love ants! Its so interesting how so many little guys can work together for a common goal :)'),
('Dec2', 'fakemail@mail.com', 'Anteaters', 'I think ants SUCK');