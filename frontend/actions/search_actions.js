import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const NO_RESULTS_FOUND = "NO_RESULTS_FOUND";

const searchResults = results => ({
    type: RECEIVE_SEARCH_RESULTS,
    results
});

const noResults = () => ({
    type: NO_RESULTS_FOUND
});

export const search = input => dispatch => {
    return SearchApiUtil.search(input)
        .then(results => dispatch(searchResults(results)))
        .fail(() => dispatch(noResults()))
};