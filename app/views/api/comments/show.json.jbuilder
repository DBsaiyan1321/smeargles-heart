json.extract! @comment, :id, :imagination_id, :user_id, :body
json.username @comment.user.username
if @comment.user.avatar.attached?
    json.avatar url_for(@comment.user.avatar)
else 
    json.avatar nil 
end