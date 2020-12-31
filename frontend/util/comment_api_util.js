export const fetchComments = imaginationId => {
    return $.ajax({
        method: "GET",
        url: `/api/imaginations/${imaginationId}/comments`
    })
};

export const createComment = comment => { 
    return $.ajax({
        method: "POST", 
        url: `/api/imaginations/${comment.imagination_id}/comments`, 
        data: { comment }
    })
};

export const updateComment = comment => { 
    return $.ajax({
        method: "PATCH", 
        url: `/api/imaginations/${comment.imagination_id}/comments/${comment.id}`, 
        data: { comment }
    })
};

export const deleteComment = comment => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/imaginations/${comment.imagination_id}/comments/${comment.id}`
    })
};

