insert into note(user_id, note_content, trash)
values($1, 'New Note', 'false');
select n.note_id, n.note_content from note as n
join users as u on u.user_id = n.user_id  
where u.user_id = $1
order by note_id desc
