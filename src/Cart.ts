type CartItem = {
	product: string;
	quantity: number;
};

export class Cart {
	private items: CartItem[] = [];
	add(item: CartItem) {
		this.items.push(item);
	}
	getItems() {
		return this.items;
	}
}
