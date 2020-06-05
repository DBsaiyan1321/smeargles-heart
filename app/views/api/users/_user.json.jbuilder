json.extract! user, :id, :username, :email

if user.bio 
    json.bio user.bio 
else  
    json.bio ""
end 

if user.avatar.attached? 
    json.avatar url_for(user.avatar)
else 
    json.avatar nil 
end

json.createdImaginationIds user.imagination_ids # 
json.imaginations user.imaginations.each do |imagination| 
    json.extract! imagination, :id, :title, :description, :artist_id
    json.image url_for(imagination.image)
    json.likes imagination.like_ids 
    json.comments imagination.comment_ids
    json.username imagination.user.username 
end 
