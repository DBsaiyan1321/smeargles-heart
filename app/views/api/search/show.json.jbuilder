@imaginations.each do |imagination| 
    debugger
    json.set! imagination.id do 
        json.extract! imagination, :id, :title, :description, :artist_id
        json.image url_for(imagination.image) 
        json.likes imagination.like_ids
        json.comments imagination.comment_ids
        json.username imagination.user.username
    end 
end 