import { Cart } from '../src/Cart';

describe('Cart', () => {
	test('ajout d’un article avec add()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2 });

		expect(cart.getItems()).toEqual([{ product: 'pomme', quantity: 2 }]);
	});
});
