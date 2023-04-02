
import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type ItemsType, type DataType} from '../types/types';
import productCardsApi from '../../api/api';

const initialState: DataType = {
	items: [],
	total: 0,
	page: 0,
	size: 0,
	pages: 0,

};

const slice = createSlice({
	name: 'productList',
	initialState,
	reducers: {
		getProductList(state, action: PayloadAction<{data: DataType}>) {
			return action.payload.data;
		},
	},
},
);

export const {
	getProductList,
} = slice.actions;

export const routeReducer = slice.reducer;

// Export const getProductCardListThunkCreator = (currentPage: number) => (dispatch: (action: PayloadAction) => void) => {
// 	// eslint-disable-next-line @typescript-eslint/no-floating-promises
// 	productCardsApi.getCards(currentPage).then(res => {
// 		dispatch(getProductList({data: res.data}));
// 	});
// };

