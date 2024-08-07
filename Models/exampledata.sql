

TRUNCATE TABLE "MovieClasses", "Reviews" RESTART IDENTITY;

-- Insert movies into MovieClasses table
INSERT INTO "MovieClasses" ("Title", "ReleaseDate", "Director", "Genre") VALUES
    ('The Shawshank Redemption', '1994-09-23', 'Frank Darabont', 'Drama'),
    ('The Godfather', '1972-03-24', 'Francis Ford Coppola', 'Crime'),
    ('The Dark Knight', '2008-07-18', 'Christopher Nolan', 'Action'),
    ('Pulp Fiction', '1994-10-14', 'Quentin Tarantino', 'Crime'),
    ('Schindler''s List', '1993-12-15', 'Steven Spielberg', 'Biography'),
    ('The Lord of the Rings: The Return of the King', '2003-12-17', 'Peter Jackson', 'Adventure'),
    ('Fight Club', '1999-10-15', 'David Fincher', 'Drama'),
    ('Forrest Gump', '1994-07-06', 'Robert Zemeckis', 'Drama'),
    ('Inception', '2010-07-16', 'Christopher Nolan', 'Action'),
    ('The Matrix', '1999-03-31', 'Lana and Lilly Wachowski', 'Sci-Fi'),
    ('The Silence of the Lambs', '1991-02-14', 'Jonathan Demme', 'Thriller'),
    ('Se7en', '1995-09-22', 'David Fincher', 'Crime'),
    ('Gladiator', '2000-05-05', 'Ridley Scott', 'Action'),
    ('Braveheart', '1995-05-24', 'Mel Gibson', 'Biography'),
    ('Jurassic Park', '1993-06-11', 'Steven Spielberg', 'Adventure'),
    ('Titanic', '1997-12-19', 'James Cameron', 'Romance'),
    ('Goodfellas', '1990-09-19', 'Martin Scorsese', 'Crime'),
    ('The Departed', '2006-10-06', 'Martin Scorsese', 'Crime'),
    ('Avatar', '2009-12-18', 'James Cameron', 'Sci-Fi'),
    ('Saving Private Ryan', '1998-07-24', 'Steven Spielberg', 'War'),
    ('Interstellar', '2014-11-07', 'Christopher Nolan', 'Sci-Fi'),
    ('The Green Mile', '1999-12-10', 'Frank Darabont', 'Crime'),
    ('The Lion King', '1994-06-24', 'Roger Allers, Rob Minkoff', 'Animation'),
    ('Back to the Future', '1985-07-03', 'Robert Zemeckis', 'Adventure'),
    ('Star Wars: Episode IV - A New Hope', '1977-05-25', 'George Lucas', 'Sci-Fi'),
    ('The Avengers', '2012-05-04', 'Joss Whedon', 'Action'),
    ('Iron Man', '2008-05-02', 'Jon Favreau', 'Action'),
    ('Spider-Man: Into the Spider-Verse', '2018-12-14', 'Bob Persichetti, Peter Ramsey, Rodney Rothman', 'Animation'),
    ('Black Panther', '2018-02-16', 'Ryan Coogler', 'Action'),
    ('Deadpool', '2016-02-12', 'Tim Miller', 'Action'),
    ('Guardians of the Galaxy', '2014-08-01', 'James Gunn', 'Action'),
    ('Wonder Woman', '2017-06-02', 'Patty Jenkins', 'Action'),
    ('Thor: Ragnarok', '2017-11-03', 'Taika Waititi', 'Action'),
    ('Doctor Strange', '2016-11-04', 'Scott Derrickson', 'Action'),
    ('Star Wars: Episode V - The Empire Strikes Back', '1980-05-21', 'Irvin Kershner', 'Sci-Fi'),
    ('Star Wars: Episode VI - Return of the Jedi', '1983-05-25', 'Richard Marquand', 'Sci-Fi'),
    ('Incredibles 2', '2018-06-15', 'Brad Bird', 'Animation'),
    ('The Incredibles', '2004-11-05', 'Brad Bird', 'Animation'),
    ('Finding Nemo', '2003-05-30', 'Andrew Stanton', 'Animation'),
    ('Toy Story', '1995-11-22', 'John Lasseter', 'Animation'),
    ('Toy Story 3', '2010-06-18', 'Lee Unkrich', 'Animation'),
    ('Inside Out', '2015-06-19', 'Pete Docter, Ronnie del Carmen', 'Animation'),
    ('Coco', '2017-11-22', 'Lee Unkrich, Adrian Molina', 'Animation'),
    ('Monsters, Inc.', '2001-11-02', 'Pete Docter, David Silverman, Lee Unkrich', 'Animation'),
    ('WALL-E', '2008-06-27', 'Andrew Stanton', 'Animation'),
    ('Up', '2009-05-29', 'Pete Docter, Bob Peterson', 'Animation');

-- Insert reviews into Reviews table
INSERT INTO "Reviews" ("MovieClassId", "Body", "CreatedAt", "Stars") VALUES
    (1, 'A moving story about hope and friendship.', '2024-07-10 14:23:55', 5),
    (1, 'Inspirational and unforgettable.', '2024-07-10 14:23:55', 4),
    (2, 'A gripping tale of family and power.', '2024-07-10 14:23:55', 5),
    (2, 'Unparalleled storytelling and acting.', '2024-07-10 14:23:55', 4),
    (2, 'An absolute masterpiece.', '2024-07-10 14:23:55', 5),
    (3, 'Heath Ledger’s performance is legendary.', '2024-07-10 14:23:55', 5),
    (3, 'An exceptional superhero film.', '2024-07-10 14:23:55', 4),
    (4, 'Quentin Tarantino’s finest work.', '2024-07-10 14:23:55', 5),
    (4, 'A unique blend of humor and violence.', '2024-07-10 14:23:55', 4),
    (4, 'An innovative and entertaining film.', '2024-07-10 14:23:55', 5),
    (5, 'A heartbreaking and important film.', '2024-07-10 14:23:55', 5),
    (5, 'An unforgettable cinematic experience.', '2024-07-10 14:23:55', 5),
    (6, 'An epic conclusion to an epic saga.', '2024-07-10 14:23:55', 5),
    (6, 'Visually stunning and emotionally powerful.', '2024-07-10 14:23:55', 4),
    (6, 'A masterpiece of fantasy filmmaking.', '2024-07-10 14:23:55', 5),
    (7, 'A thought-provoking and intense film.', '2024-07-10 14:23:55', 5),
    (7, 'Superb direction and acting.', '2024-07-10 14:23:55', 4),
    (8, 'A heartwarming and inspirational story.', '2024-07-10 14:23:55', 5),
    (8, 'Tom Hanks delivers an outstanding performance.', '2024-07-10 14:23:55', 5),
    (9, 'A mind-bending and visually stunning film.', '2024-07-10 14:23:55', 5),
    (9, 'Christopher Nolan’s best work.', '2024-07-10 14:23:55', 4),
    (9, 'A brilliant and complex plot.', '2024-07-10 14:23:55', 5),
    (10, 'A revolutionary film in every way.', '2024-07-10 14:23:55', 5),
    (10, 'Great action and a thought-provoking story.', '2024-07-10 14:23:55', 4),
    (11, 'A chilling and masterful thriller.', '2024-07-10 14:23:55', 5),
    (11, 'Outstanding performances by the lead actors.', '2024-07-10 14:23:55', 4),
    (12, 'A dark and disturbing film with great direction.', '2024-07-10 14:23:55', 5),
    (12, 'Brad Pitt and Morgan Freeman are excellent.', '2024-07-10 14:23:55', 4),
    (13, 'An epic and thrilling film with great performances.', '2024-07-10 14:23:55', 5),
    (13, 'Visually impressive and action-packed.', '2024-07-10 14:23:55', 4),
    (14, 'A powerful and inspiring film.', '2024-07-10 14:23:55', 5),
    (14, 'Mel Gibson delivers a stellar performance.', '2024-07-10 14:23:55', 4),
    (15, 'A groundbreaking and visually stunning film.', '2024-07-10 14:23:55', 5),
    (15, 'Steven Spielberg at his best.', '2024-07-10 14:23:55', 4),
    (16, 'A beautiful and tragic love story.', '2024-07-10 14:23:55', 5),
    (16, 'Visually stunning and emotionally moving.', '2024-07-10 14:23:55', 4),
    (17, 'A gripping and intense crime drama.', '2024-07-10 14:23:55', 5),
    (17, 'Martin Scorsese’s finest work.', '2024-07-10 14:23:55', 4),
    (18, 'A brilliant and thrilling film.', '2024-07-10 14:23:55', 5),
    (18, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (19, 'A visually stunning and groundbreaking film.', '2024-07-10 14:23:55', 5),
    (19, 'James Cameron delivers another masterpiece.', '2024-07-10 14:23:55', 4),
    (20, 'A powerful and moving war film.', '2024-07-10 14:23:55', 5),
    (20, 'Steven Spielberg’s direction is outstanding.', '2024-07-10 14:23:55', 4),
    (21, 'A visually stunning and thought-provoking film.', '2024-07-10 14:23:55', 5),
    (21, 'Christopher Nolan’s best work yet.', '2024-07-10 14:23:55', 4),
    (22, 'A powerful and moving story.', '2024-07-10 14:23:55', 5),
    (22, 'Outstanding performances and direction.', '2024-07-10 14:23:55', 4),
    (23, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (23, 'A timeless classic.', '2024-07-10 14:23:55', 4),
    (24, 'A fun and exciting time-travel adventure.', '2024-07-10 14:23:55', 5),
    (24, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (25, 'A groundbreaking and influential film.', '2024-07-10 14:23:55', 5),
    (25, 'Great special effects and story.', '2024-07-10 14:23:55', 4),
    (26, 'A thrilling and action-packed superhero film.', '2024-07-10 14:23:55', 5),
    (26, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (27, 'A fun and entertaining superhero film.', '2024-07-10 14:23:55', 5),
    (27, 'Great action and humor.', '2024-07-10 14:23:55', 4),
    (28, 'A visually stunning and innovative film.', '2024-07-10 14:23:55', 5),
    (28, 'Great animation and story.', '2024-07-10 14:23:55', 4),
    (29, 'A groundbreaking and culturally significant film.', '2024-07-10 14:23:55', 5),
    (29, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (30, 'A fun and irreverent superhero film.', '2024-07-10 14:23:55', 5),
    (30, 'Great action and humor.', '2024-07-10 14:23:55', 4),
    (31, 'A fun and entertaining space adventure.', '2024-07-10 14:23:55', 5),
    (31, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (32, 'A powerful and inspiring superhero film.', '2024-07-10 14:23:55', 5),
    (32, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (33, 'A fun and entertaining superhero film.', '2024-07-10 14:23:55', 5),
    (33, 'Great action and humor.', '2024-07-10 14:23:55', 4),
    (34, 'A visually stunning and innovative film.', '2024-07-10 14:23:55', 5),
    (34, 'Great special effects and story.', '2024-07-10 14:23:55', 4),
    (35, 'A thrilling and action-packed sci-fi film.', '2024-07-10 14:23:55', 5),
    (35, 'Great performances and direction.', '2024-07-10 14:23:55', 4),
    (36, 'A thrilling and action-packed sci-fi film.', '2024-07-10 14:23:55', 5),
    (36, 'Great special effects and story.', '2024-07-10 14:23:55', 4),
    (37, 'A fun and entertaining animated film.', '2024-07-10 14:23:55', 5),
    (37, 'Great animation and humor.', '2024-07-10 14:23:55', 4),
    (38, 'A fun and entertaining animated film.', '2024-07-10 14:23:55', 5),
    (38, 'Great animation and story.', '2024-07-10 14:23:55', 4),
    (39, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (39, 'A timeless classic.', '2024-07-10 14:23:55', 4),
    (40, 'A groundbreaking and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (40, 'Great story and characters.', '2024-07-10 14:23:55', 4),
    (41, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (41, 'A timeless classic.', '2024-07-10 14:23:55', 4),
    (42, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (42, 'Great story and characters.', '2024-07-10 14:23:55', 4),
    (43, 'A fun and entertaining animated film.', '2024-07-10 14:23:55', 5),
    (43, 'Great animation and humor.', '2024-07-10 14:23:55', 4),
    (44, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (44, 'A timeless classic.', '2024-07-10 14:23:55', 4),
    (45, 'A heartwarming and beautifully animated film.', '2024-07-10 14:23:55', 5),
    (45, 'Great story and characters.', '2024-07-10 14:23:55', 4);

