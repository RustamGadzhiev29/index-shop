/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import {configureStore} from '@reduxjs/toolkit';
import {type TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {type AnyAction, combineReducers} from 'redux';
import thunkMiddleware, {type ThunkDispatch} from 'redux-thunk';
import {routeReducer} from './slice/productListSlice';

// Import { dataReducer } from "./slice";

const rootReducer = combineReducers({
	data: routeReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useTypedDispatch = () =>
	useDispatch<TypedDispatch<AppRootStateType>>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType>
  = useSelector;

// @ts-expect-error
window.store = store;
