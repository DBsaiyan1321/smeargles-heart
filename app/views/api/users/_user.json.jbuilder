json.extract! user, :id, :username, :email, :bio
# if user.avatar != nil
#     json.avatar url_for(user.avatar)
# else 
#     json.avatar nil 
# end
json.createdImaginationIds user.imagination_ids # 
# json.owned imaginations
# json.owned user.imaginations # Take this out when you normalize the state. Also, this doesn't give me the image.

# user.imaginations.each do |imagination| { 
#     imagination.extract! all the stuff
#     json.image url_for(imagination.image)
# }