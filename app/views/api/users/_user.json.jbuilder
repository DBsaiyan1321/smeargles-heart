json.extract! user, :id, :username, :email 
json.createdImaginationIds do 
    json.array! user.imaginations, :id
end 