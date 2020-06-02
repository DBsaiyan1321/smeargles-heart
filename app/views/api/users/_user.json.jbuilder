json.extract! user, :id, :username, :email 
json.createdImaginationIds user.imagination_ids # 
# json.owned imaginations
# json.owned user.imaginations # Take this out when you normalize the state. Also, this doesn't give me the image.
