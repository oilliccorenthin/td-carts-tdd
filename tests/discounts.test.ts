import { applyCoupon, Coupon } from '../src/utils/discounts';

describe('Coupons', () => {
	test('applique -10% sur un panier de 100€', () => {
		const coupon: Coupon = { type: 'PERCENT', value: 10 };
		const result = applyCoupon(100, coupon);

		expect(result).toBeCloseTo(90);
	});

	test('applique -5€ sur un panier de 50€', () => {
		const coupon: Coupon = { type: 'AMOUNT', value: 5 };
		const result = applyCoupon(50, coupon);

		expect(result).toBeCloseTo(45);
	});

	test('ne fait rien si le coupon est expiré', () => {
		const coupon: Coupon = {
			type: 'AMOUNT',
			value: 5,
			expiresAt: new Date('2000-01-01'),
		};
		const result = applyCoupon(50, coupon);

		expect(result).toBe(50);
	});

	test('ne fait rien si le montant minimum n’est pas atteint', () => {
		const coupon: Coupon = {
			type: 'PERCENT',
			value: 10,
			minAmount: 100,
		};
		const result = applyCoupon(50, coupon);

		expect(result).toBe(50);
	});
});
