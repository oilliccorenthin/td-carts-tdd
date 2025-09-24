export type Product = {
	id: string;
	stock: number;
	price: number;
};

export class InMemoryProductRepo {
	private products: Product[];

	constructor(initialProducts: Product[]) {
		this.products = initialProducts;
	}

	getProduct(id: string): Product | undefined {
		return this.products.find((p) => p.id === id);
	}

	reduceStock(id: string, quantity: number) {
		const product = this.products.find((p) => p.id === id);
		if (!product) throw new Error('Produit introuvable');
		if (product.stock < quantity) throw new Error('Stock insuffisant');
		product.stock -= quantity;
	}
}
