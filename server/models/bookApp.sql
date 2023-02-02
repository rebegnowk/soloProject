SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.users (
  "_id" serial NOT NULL, 
  "name" varchar NOT NULL,
  "age" int,
  "favegenre_id" bigint NOT NULL,
  "favebook_id" bigint NOT NULL, 
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.genre (
  "_id" serial NOT NULL, 
  "type" varchar NOT NULL, 
  CONSTRAINT "genre_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.books (
  "_isbn" bigint NOT NULL,
  "title" varchar,
  "author" varchar,
  "series" varchar,
  "year" varchar,
  "total_pages" integer, 
  "genre_id" bigint NOT NULL,
  CONSTRAINT "books_pk" PRIMARY KEY ("_isbn")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.books_list (
  "_id" bigint NOT NULL,
  "user_id" serial NOT NULL, 
  "book_isbn" bigint NOT NULL,
  "status" varchar,
  "date_added" date NOT NULL, 
  CONSTRAINT "books_list_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


--FOREIGN KEY
-- ADD FOREIGN KEY TO USERS TABLE
ALTER TABLE public.users ADD CONSTRAINT "users_fk0" FOREIGN KEY ("favegenre_id") REFERENCES public.genre("_id");
ALTER TABLE public.users ADD CONSTRAINT "users_fk1" FOREIGN KEY ("favebook_id") REFERENCES public.books("_isbn");

-- ADD FOREIGN KEY TO BOOKS
ALTER TABLE public.books ADD CONSTRAINT "books_fk0" FOREIGN KEY ("genre_id") REFERENCES public.genre("_id");

--ADD FOREIGN KEY TO BOOKS_LIST
ALTER TABLE public.books_list ADD CONSTRAINT "books_list_fk0" FOREIGN KEY
("user_id") REFERENCES public.users("_id");
ALTER TABLE public.books_list ADD CONSTRAINT "books_list_fk1" FOREIGN KEY
("book_isbn") REFERENCES public.books("_isbn");

--DATA : GENRE
INSERT INTO public.genre VALUES (1, 'fantasy');
INSERT INTO public.genre VALUES (2, 'sci-fi');
INSERT INTO public.genre VALUES (3, 'mystery');
INSERT INTO public.genre VALUES (4, 'horror');
INSERT INTO public.genre VALUES (5, 'action-adventure');

--ADDING DATA
--DATA : USERS
INSERT INTO public.users VALUES (1, 'rebe', 90, 1, 0688062334);
INSERT INTO public.users VALUES (2, 'fabio', 9, 3, 0743437330);
INSERT INTO public.users VALUES (3, 'gribbin', 43, 1, 0688062334);
INSERT INTO public.users VALUES (4, 'harbor', 18, 5, 0141365471);



--DATA : BOOKS
INSERT INTO public.books ("_isbn", "title", "author", "year", "total_pages", "genre_id") VALUES (0688062334, 'Howls Moving Castle', 'Diana Wynne Jones', '1986', 212, 1); 
INSERT INTO public.books VALUES (0743437330, 'The Never War', 'D.J. MacHale', 'Pendragon', '2003', 352, 1);
INSERT INTO public.books ("_isbn", "title", "author", "year", "total_pages", "genre_id") VALUES (0141365471, 'The Witches','"Roald Dahl', '1983', 208, 4);


--JOIN TABLE 
-- SELECT *
-- FROM public.books_list AS bl
-- LEFT JOIN public.books AS b ON
-- bl.book_isbn=b._isbn;


--TO UPDATE, NEEDS NEW QUERES
