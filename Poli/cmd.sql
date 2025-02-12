-- show current databases
show databases

-- create the database (if not exist) 
create database if not exists gulliver_travels
use gulliver_travels

-- create the table (if not exists) 
create table if not exists 'user' (
    user_id int primary key auto_increment,         -- user id
    user_nm varchar(255) not null,                  -- user name 
    user_dt timestamp default current_timestamp,    -- user date 
)

create table if no exists 'comment' (
    comm_id int primary key auto_increment,         -- comment id
    comm_dt timestamp default current_timestamp,    -- comment date
    comm_ctx text not null,                         -- comment context

    comm_rid int not null,                          -- reference to user id
    foreign key (comm_ref_id) 'user'(id),
)