import axios from 'axios';

export const instance = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'https://testguru.ru/frontend-test/api/v1/ads',
});
