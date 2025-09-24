export type Coupon = {
	type: 'PERCENT' | 'AMOUNT';
	value: number;
	expiresAt?: Date;
	minAmount?: number;
};

export function applyCoupon(total: number, coupon: Coupon): number {
	// Vérifie la date d’expiration
	if (coupon.expiresAt && coupon.expiresAt < new Date()) {
		return total;
	}

	// Vérifie le montant minimum
	if (coupon.minAmount && total < coupon.minAmount) {
		return total;
	}

	// Applique la réduction
	if (coupon.type === 'PERCENT') {
		return total - (total * coupon.value) / 100;
	}

	if (coupon.type === 'AMOUNT') {
		return Math.max(0, total - coupon.value);
	}

	return total;
}
