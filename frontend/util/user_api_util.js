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