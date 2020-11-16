@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
    end 
end 

# json.set! - whatever is in the code block goes under the key of the user.id
# json.partial! - uses the partial in the given routes, and sets the user variable (the key) in the partial to the user (the value)