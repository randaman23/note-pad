update note 
set note_content = $1
where note_id = $2;

select * from note 
where note_id = $2;