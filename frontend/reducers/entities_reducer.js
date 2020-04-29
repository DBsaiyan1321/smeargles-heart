import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ImaginationsReducer from "./imaginations_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer, 
    imaginations: ImaginationsReducer
}); 

export default EntitiesReducer;