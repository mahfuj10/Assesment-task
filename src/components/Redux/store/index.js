import { combineReducers } from "redux";
import clientsReducer from "../reducer/clients";

const allReducer = combineReducers({
    clients: clientsReducer
});

export default allReducer;