import { calculerTVA } from './utils/tva';

type CartItem = {
	product: string;
	quantity: number;
	price: number;
};

export class Cart {
	private items: CartItem[] = [];
	private totalsCallback?: (totals: {
		ht: number;
		tva: number;
		ttc: number;
	}) => void;
	private debounceTimer?: NodeJS.Timeout;

	add(item: CartItem) {
		this.items.push(item);
		this.scheduleTotalsRecalc();
	}
	update(item: CartItem) {
		const index = this.items.findIndex((i) => i.product === item.product);
		if (index !== -1) {
			this.items[index] = item;
		}
		this.scheduleTotalsRecalc();
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
		this.scheduleTotalsRecalc();
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
	onTotalsChange(
		cb: (totals: { ht: number; tva: number; ttc: number }) => void,
	) {
		this.totalsCallback = cb;
	}

	scheduleTotalsRecalc() {
		if (this.debounceTimer) {
			clearTimeout(this.debounceTimer);
		}
		this.debounceTimer = setTimeout(() => {
			if (this.totalsCallback) {
				this.totalsCallback(this.totals());
			}
		}, 200);
	}
}
