import { RECEIVE_SEARCH_RESULTS, NO_RESULTS_FOUND } from "../actions/search_actions";

const SearchReducer = (oldState = {}, action) => { 
    Object.freeze(oldState) 
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.results
        case NO_RESULTS_FOUND:
            return {};
        default:
            return oldState;
    }
}

export default SearchReducer