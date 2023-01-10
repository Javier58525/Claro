import { applyMiddleware } from "redux";
import {configureStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import peliculasReducer from "./Peliculas";
import detallesPeliculasReducer from "./DetallesPeliculasRedux";



export default function generateStore() {
	const store = configureStore(
		{reducer:{
				titleDetail: detallesPeliculasReducer,
				titleList: peliculasReducer,}},
		composeWithDevTools(applyMiddleware(thunk)),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	);
	return store;
}
