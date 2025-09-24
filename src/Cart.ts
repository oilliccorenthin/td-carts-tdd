type CartItem = {
	product: string;
	quantity: number;
};

export class Cart {
	private items: CartItem[] = [];
	add(item: CartItem) {}
	getItems() {}
}
