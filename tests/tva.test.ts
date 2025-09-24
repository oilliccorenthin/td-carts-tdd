import { calculerTVA } from '../src/utils/tva';

test('calculerTVA applique bien le taux par défaut 20%', () => {
	expect(calculerTVA(100)).toBeCloseTo(20);
});

test('calculerTVA applique un taux personnalisé', () => {
	expect(calculerTVA(200, 0.1)).toBeCloseTo(20);
});
