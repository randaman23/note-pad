create table users(
user_id serial primary key,
user_email text,
user_password text
)

create table note(
note_id serial primary key,
user_id int references users(user_id),
note_content text,
trash boolean 
)