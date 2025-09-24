import { Cart } from '../src/Cart';
import { CartService } from '../src/CartService';
import { InMemoryProductRepo } from '../src/InMemoryProductRepo';

describe('CartService avec stock', () => {
	test('ajoute un produit si stock suffisant', () => {
		const repo = new InMemoryProductRepo([
			{ id: 'pomme', stock: 5, price: 2 },
		]);
		const cart = new Cart();
		const service = new CartService(cart, repo);

		service.addToCart('pomme', 3);

		expect(cart.getItems()).toEqual([
			{ product: 'pomme', quantity: 3, price: 2 },
		]);
	});

	test('lève une erreur si stock insuffisant', () => {
		const repo = new InMemoryProductRepo([
			{ id: 'banane', stock: 2, price: 1 },
		]);
		const cart = new Cart();
		const service = new CartService(cart, repo);

		expect(() => service.addToCart('banane', 5)).toThrow(
			'Stock insuffisant',
		);
	});

	test('checkout vide le panier et envoie un email', () => {
		const repo = new InMemoryProductRepo([
			{ id: 'orange', stock: 10, price: 3 },
		]);
		const cart = new Cart();
		const fakeEmailService = { send: jest.fn() };
		const service = new CartService(cart, repo, fakeEmailService);

		service.addToCart('orange', 2);
		service.checkout('user@example.com');

		expect(cart.getItems()).toEqual([]);
		expect(fakeEmailService.send).toHaveBeenCalledWith(
			'user@example.com',
			expect.stringContaining('Merci pour votre commande'),
		);
	});
});
