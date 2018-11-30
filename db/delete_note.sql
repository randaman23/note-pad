delete from note
where user_id = $1
and note_id = $2;

select n.note_id, n.note_content from note as n
join users as u on u.user_id = n.user_id  
where u.user_id = $1
order by note_content asc