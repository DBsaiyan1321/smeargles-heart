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

// $.ajax - jQuery ajax way to make an ajax call
// We hand it a HTTP method, the Rails route we want to send a request to, the payload (data object) we want to send up, contentType and processData false means what it says