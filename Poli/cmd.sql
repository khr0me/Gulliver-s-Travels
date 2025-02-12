-- show current databases
SHOW DATABASES

-- create the database (if not exist) 
CREATE DATABASE IF NOT EXISTS gulliver_travels
USE gulliver_travels

-- create the table (if not exists) 
CREATE TABLE IF NOT EXISTS `user` (
    user_id INT PRIMARY KEY AUTO_INCREMENT,        -- user id
    user_nm VARCHAR(255) NOT NULL,                  -- user name
    user_dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP    -- user date
);

CREATE TABLE IF NOT EXISTS `comment` (
    comm_id INT PRIMARY KEY AUTO_INCREMENT,        -- comment id
    comm_dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,   -- comment date
    comm_ctx TEXT NOT NULL,                         -- comment context
    comm_rid INT NOT NULL,                          -- reference to user id
    FOREIGN KEY (comm_rid) REFERENCES `user`(user_id) -- foreign key referencing user_id
);