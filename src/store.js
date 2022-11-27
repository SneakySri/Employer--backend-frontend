import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import EmployerReducer from "./Reducers/reducer";


const store = createStore(EmployerReducer,applyMiddleware(thunk));

export default store;