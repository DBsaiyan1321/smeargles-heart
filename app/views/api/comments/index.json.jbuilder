@comments.each do |comment| 
    json.set! comment.id do 
        json.extract! comment, :id, :user_id, :imagination_id, :body
        json.username comment.user.username
        if comment.user.avatar.attached?
            json.avatar url_for(comment.user.avatar)
        else 
            json.avatar nil 
        end
    end 
end