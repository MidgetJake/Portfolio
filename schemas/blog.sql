CREATE TABLE posts (
    postid character varying(31); PRIMARY KEY,
    title TEXT NOT NULL,
    postdate TIMESTAMP WITH TIME ZONE NOT NULL,
    editdate TIMESTAMP WITH TIME ZONE,
    edited boolean DEFAULT False,
    content TEXT NOT NULL,
    description character varying(600) NOT NULL,
    featured boolean DEFAULT False,
    tags text[]
);