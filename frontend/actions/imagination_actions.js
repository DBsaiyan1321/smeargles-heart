import * as ImaginationAPIUtil from "../util/imagination_api_util";
// import { receiveErrors } from "./session_actions";

export const RECEIVE_IMAGINATIONS = "RECEIVE_IMAGINATIONS"
export const RECEIVE_IMAGINATION = "RECEIVE_IMAGINATION"
export const REMOVE_IMAGINATION = "REMOVE_IMAGINATION"

const receiveImaginations = imaginations => ({
    type: RECEIVE_IMAGINATIONS, 
    imaginations
});

const receiveImagination = imagination => ({
    type: RECEIVE_IMAGINATION, 
    imagination
});

const removeImagination = imaginationId => ({
    type: REMOVE_IMAGINATION,
    imaginationId
});

export const fetchImaginations = userId => dispatch => {
    return ImaginationAPIUtil.fetchImaginations(userId)
        .then(imaginations => dispatch(receiveImaginations(imaginations)))
        // .fail(errors => dispatch(receiveErrors(errors)))
};

export const fetchImagination = imaginationId => dispatch => {
    return ImaginationAPIUtil.fetchImagination(imaginationId)
        .then(imagination => dispatch(receiveImagination(imagination)))
        // .fail(errors => dispatch(receiveErrors(errors)))
};

export const createImagination = imagination => dispatch => {
    return ImaginationAPIUtil.createImagination(imagination)
        .then(imagination => dispatch(receiveImagination(imagination)))
        .fail(errors => dispatch(receiveErrors(errors)))
};

export const updateImagination = imagination => dispatch => {
    return ImaginationAPIUtil.updateImagination(imagination)
        .then(imagination => dispatch(receiveImagination(imagination)))
        .fail(errors => dispatch(receiveErrors(errors)))
};

export const deleteImagination = imaginationId => dispatch => {
    return ImaginationAPIUtil.deleteImagination(imaginationId)
        .then(() => dispatch(removeImagination(imaginationId)))
        // .fail(errors => dispatch(receiveErrors(errors)))
};