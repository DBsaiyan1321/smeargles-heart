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
        data: { imagination }
    })
}

export const updateImagination = imagination => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/imaginations/${imagination.id}`, 
        data: { imagination }
    })
}

export const deleteImagination = imaginationId => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/imaginations/${imaginationId}`
    })
}