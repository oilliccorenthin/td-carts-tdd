import { Cart } from '../src/Cart';

describe('Cart', () => {
	test('ajout d’un article avec add()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2, price: 10 });

		expect(cart.getItems()).toEqual([
			{ product: 'pomme', quantity: 2, price: 10 },
		]);
	});
	test("retrait d'un article avec remove()", () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2, price: 10 });
		cart.remove({ product: 'pomme', quantity: 1, price: 10 });

		expect(cart.getItems()).toEqual([
			{ product: 'pomme', quantity: 1, price: 10 },
		]);
	});
	test('remove supprime complètement si quantité tombe à 0', () => {
		const cart = new Cart();
		cart.add({ product: 'banane', quantity: 2, price: 5 });
		cart.remove({ product: 'banane', quantity: 2, price: 5 });

		expect(cart.getItems()).toEqual([]);
	});

	test('remove supprime complètement si quantité devient négative', () => {
		const cart = new Cart();
		cart.add({ product: 'orange', quantity: 1, price: 20 });
		cart.remove({ product: 'orange', quantity: 5, price: 20 });

		expect(cart.getItems()).toEqual([]);
	});

	test('mise à jour de la quantité avec update()', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2, price: 10 });
		cart.update({ product: 'pomme', quantity: 3, price: 10 });

		expect(cart.getItems()).toEqual([
			{ product: 'pomme', quantity: 3, price: 10 },
		]);
	});
	test('calcule total HT, TVA et TTC', () => {
		const cart = new Cart();
		cart.add({ product: 'pomme', quantity: 2, price: 6 });

		const totals = cart.totals();

		expect(totals.ht).toBeCloseTo(12, 2);
		expect(totals.tva).toBeCloseTo(2.4, 2);
		expect(totals.ttc).toBeCloseTo(14.4, 2);
	});
});
