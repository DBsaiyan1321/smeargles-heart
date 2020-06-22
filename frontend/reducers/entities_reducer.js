import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ImaginationsReducer from "./imaginations_reducer";
import LikesReducer from "./likes_reducer";
import CommentsReducer from "./comments_reducer";
import SearchReducer from "./search_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    imaginations: ImaginationsReducer,
    likes: LikesReducer, 
    comments: CommentsReducer,
    search: SearchReducer
}); 

export default EntitiesReducer;