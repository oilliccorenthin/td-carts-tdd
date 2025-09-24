import { Cart } from '../src/Cart';

describe('Cart', () => {
	test('ajout d’un article avec add()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2 });

		expect(cart.getItems()).toEqual([{ product: 'pomme', quantity: 2 }]);
	});
	test("retrait d'un article avec remove()", () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2 });
		cart.remove({ product: 'pomme', quantity: 1 });

		expect(cart.getItems()).toEqual([{ product: 'pomme', quantity: 1 }]);
	});
	test('mise à jour de la quantité avec update()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2 });
		cart.update({ product: 'pomme', quantity: 3 });

		expect(cart.getItems()).toEqual([{ product: 'pomme', quantity: 3 }]);
	});
});
