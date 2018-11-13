create table users(
user_id serial primary key,
user_email text,
user_password text
)

insert into users(user_email, user_password)
values('test', 'test')

create table note(
note_id serial primary key,
user_id int references users(user_id),
note_content text,
trash boolean 
)