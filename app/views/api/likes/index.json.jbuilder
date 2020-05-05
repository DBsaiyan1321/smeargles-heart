@likes.each do |like| 
    json.set! like.id do 
        json.extract! like, :imagination_id, :user_id
    end 
end 