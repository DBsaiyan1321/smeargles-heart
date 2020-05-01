export const fetchImaginations = () => {
    return $.ajax({
        method: "GET", 
        url: "/api/imaginations"
    })
} 

export const fetchImagination = imaginationId => {
    return $.ajax({
        method: "GET", 
        url: `/api/imaginations/${imaginationId}`
    })
}

export const createImagination = imagination => {
    return $.ajax({
        method: "POST", 
        url: "/api/imaginations",
        data: imagination, // The component makes the object through form data, which is why I don't have to nest it in curly braces.
        contentType: false,
        processData: false
    })
}

export const updateImagination = imagination => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/imaginations/${imagination.id}`, 
        data: imagination, // Same here. 
        processData: false,
        contentType: false
    })
}

export const deleteImagination = imaginationId => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/imaginations/${imaginationId}`
    })
}