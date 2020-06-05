export const fetchUsers = () => {
    return $.ajax({
        method: "GET", 
        url: "/api/users"
    })
};

export const fetchUser = username => { 
    return $.ajax({
        method: "GET", 
        url: `/api/users/${username}`
    })
};

export const updateUser = user => { 
    return $.ajax({
        method: "PATCH", 
        url: `/api/users/${user.id}`,
        data: user, // params that are being sent up
        contentType: false,
        processData: false
    })
}