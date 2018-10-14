CREATE TABLE user_collection (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email TEXT,
  password VARCHAR(255)
);