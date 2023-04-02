
import {type DataType} from '../redux/types/types';
import {instance} from './config/index';

const productCardsApi = {
	async getCards(currentPage: number) {
		const response = await instance.get<DataType>(
			`?page=${currentPage}`,
		);
		return response;
	},
};

export default productCardsApi;
