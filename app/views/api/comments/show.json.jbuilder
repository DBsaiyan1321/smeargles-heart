json.extract! @comment, :id, :imagination_id, :user_id, :body
json.username @comment.user.username
json.avatar url_for(comment.user.avatar)