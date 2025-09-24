type CartItem = {
	product: string;
	quantity: number;
};

export class Cart {
	private items: CartItem[] = [];
	add(item: CartItem) {
		this.items.push(item);
	}
	update(item: CartItem) {
		const index = this.items.findIndex((i) => i.product === item.product);
		if (index !== -1) {
			this.items[index] = item;
		}
	}
	remove(item: CartItem) {
		const index = this.items.findIndex((i) => i.product === item.product);
		if (index !== -1) {
			const currentQty = this.items[index].quantity;
			const newQty = currentQty - item.quantity;

			if (newQty > 0) {
				this.items[index].quantity = newQty;
			} else {
				this.items.splice(index, 1);
			}
		}
	}
	getItems() {
		return this.items;
	}
}
