export const search = input => { 
    return $.ajax({
        method: "GET", 
        url: `/api/search/${input}`
    })
};