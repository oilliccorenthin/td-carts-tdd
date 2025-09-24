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
	test('remove supprime complètement si quantité tombe à 0', () => {
		const cart = new Cart();
		cart.add({ product: 'banane', quantity: 2 });
		cart.remove({ product: 'banane', quantity: 2 });

		expect(cart.getItems()).toEqual([]);
	});

	test('remove supprime complètement si quantité devient négative', () => {
		const cart = new Cart();
		cart.add({ product: 'orange', quantity: 1 });
		cart.remove({ product: 'orange', quantity: 5 });

		expect(cart.getItems()).toEqual([]);
	});

	test('mise à jour de la quantité avec update()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2 });
		cart.update({ product: 'pomme', quantity: 3 });

		expect(cart.getItems()).toEqual([{ product: 'pomme', quantity: 3 }]);
	});
});
