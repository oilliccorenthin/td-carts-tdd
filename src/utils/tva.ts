export function calculerTVA(montantHT: number, taux = 0.2): number {
	return montantHT * taux;
}
