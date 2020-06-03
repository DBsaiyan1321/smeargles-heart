@comments.each do |comment| 
    json.set! comment.id do 
        json.extract! comment, :id, :user_id, :imagination_id, :body
        json.username comment.user.username
    end 
end