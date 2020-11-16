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

json.createdImaginationIds user.imagination_ids 
json.imaginations user.imaginations.each do |imagination| 
    json.extract! imagination, :id, :title, :description, :artist_id
    json.image url_for(imagination.image)
    json.likes imagination.like_ids 
    json.comments imagination.comment_ids
    json.username imagination.user.username
end 

# json.extract! - turns thoses attributes of that object (hash) into attributes of the json
# json.bio user.bio - under the bio key in the json, we put the bio from the user object (hash); this applies to all of the other ones that are similar to this format
# url_for() - gives us the url for the given item
# user.imagination_ids - gets the ids of all of the items from that user's associated imaginations 