import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
const store = configureStore({
	reducer: reducers, // reducer = reducers
});
export default store;
