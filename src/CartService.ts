import { Cart } from './Cart';
import { InMemoryProductRepo } from './InMemoryProductRepo';

export class CartService {
	constructor(
		private cart: Cart,
		private repo: InMemoryProductRepo,
		private emailService: { send: (to: string, body: string) => void } = {
			send: () => {},
		},
	) {}

	addToCart(productId: string, quantity: number) {
		const product = this.repo.getProduct(productId);
		if (!product) throw new Error('Produit introuvable');

		this.repo.reduceStock(productId, quantity);

		this.cart.add({
			product: product.id,
			quantity,
			price: product.price,
		});
	}

	checkout(userEmail: string) {
		this.cart.getItems().forEach((item) => {});
		this.cart.getItems().splice(0);
		this.emailService.send(userEmail, 'Merci pour votre commande !');
	}
}
