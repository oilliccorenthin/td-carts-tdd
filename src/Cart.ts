import { calculerTVA } from './utils/tva';

type CartItem = {
	product: string;
	quantity: number;
	price: number;
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
	totals() {
		const ht = this.items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0,
		);
		const tva = calculerTVA(ht);
		const ttc = ht + tva;

		return { ht, tva, ttc };
	}
}
