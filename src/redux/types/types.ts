export type DataType =
	{
		items: ItemsType[];
		total: number;
		page: number;
		size: number;
		pages: number;
	};

export type ItemsType = {
	id: string;
	seen: boolean;
	price: number;
	title: string;
	address: string;
	about: string;
	createdAt: string;

};
