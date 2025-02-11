--  Drop existing database (if needed) and create a new one
DROP DATABASE IF EXISTS unrivaled_db;
CREATE DATABASE unrivaled_db;

--  Connect to the new database
\c unrivaled_db;

--  Create Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,           -- Auto-incrementing unique ID
  username VARCHAR(50) UNIQUE NOT NULL,  -- Unique username
  email VARCHAR(100) UNIQUE NOT NULL,    -- Unique email
  password TEXT NOT NULL,          -- Hashed password
  created_at TIMESTAMP DEFAULT NOW()  -- Auto-timestamp for creation
);

--  Create Posts Table (Forum)
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,          -- Auto-incrementing post ID
  character_name VARCHAR(50) NOT NULL,  -- Marvel character's name
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,  -- Link post to user
  content TEXT NOT NULL,          -- Content of the post
  created_at TIMESTAMP DEFAULT NOW()  -- Auto-timestamp for creation
);
