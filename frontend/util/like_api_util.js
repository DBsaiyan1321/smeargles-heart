export const fetchLikes = imaginationId => {
    return $.ajax({
        method: "GET",
        url: `/api/imaginations/${imaginationId}/likes`
    })
};

export const createLike = like => { 
    return $.ajax({
        method: "POST", 
        url: `/api/imaginations/${like.imagination_id}/likes`,
        data: { like }
    })
};

export const deleteLike = like => { 
    return $.ajax({
        method: "DELETE", 
        url: `/api/imaginations/${like.imagination_id}/likes/${like.id}`
    })
};

// Works well!