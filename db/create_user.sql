insert into users(user_email, user_password)
values($1, $2)
returning*