update note 
set note_content = $1
where note_id = $2;

select * from note 
where user_id = $3
order by note_id desc

