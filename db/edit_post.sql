update note 
set note_content = $1
where note_id = $2;
-- select n.note_id, n.note_content from note as n
-- join users as u on u.user_id = n.user_id  
-- where u.user_id = $1