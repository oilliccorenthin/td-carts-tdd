
# 📘 Test Driven Development (TDD)

## 1. Définition
Le **TDD (Test Driven Development)** est une méthode de développement agile qui consiste à **écrire d’abord les tests, puis le code de production** qui les satisfait.  
Le code évolue par petites itérations, guidées par les tests.

👉 C’est un processus **itératif et incrémental**.

---

## 2. Le cycle *Red – Green – Refactor*
On résume souvent le TDD par le cycle **Red → Green → Refactor** :

1. **Red 🔴 : écrire un test qui échoue**
   - On définit le comportement attendu avant d’écrire le code.
   - Le test échoue car la fonctionnalité n’existe pas encore.

2. **Green 🟢 : écrire le code minimal**
   - On implémente juste ce qu’il faut pour faire passer le test.
   - Pas de sophistication inutile.

3. **Refactor ♻️ : améliorer le code**
   - On restructure le code (lisibilité, duplication, optimisation).
   - Les tests garantissent que rien n’est cassé.

---

## 3. Exemple complet : La cafetière ☕

Nous voulons coder une fonction `prixCafe(taille)` qui retourne le prix d’un café selon la taille :  
- Petit = 2 €  
- Grand = 3 €

### Étape 1 — Red 🔴 (échec attendu)

On écrit les tests **avant** le code :

```js
// cafe.test.js
const { prixCafe } = require("./cafe");

test("un petit café coûte 2€", () => {
  expect(prixCafe("petit")).toBe(2);
});

test("un grand café coûte 3€", () => {
  expect(prixCafe("grand")).toBe(3);
});
````

👉 À ce stade, `prixCafe` n’existe pas.
Résultat : **les tests échouent** → c’est normal ✅

---

### Étape 2 — Green 🟢 (implémentation minimale)

On écrit le **code le plus simple possible** pour que les tests passent :

```js
// cafe.js
function prixCafe(taille) {
  if (taille === "petit") return 2;
  if (taille === "grand") return 3;
}
module.exports = { prixCafe };
```

👉 On relance les tests → **ils passent** ✅
Mais le code est rigide et pas extensible.

---

### Étape 3 — Refactor ♻️ (amélioration)

On améliore le code sans changer le comportement :

```js
// cafe.js
const tarifs = { petit: 2, grand: 3 };

function prixCafe(taille) {
  return tarifs[taille];
}

module.exports = { prixCafe };
```

👉 On relance les tests → ils passent toujours ✅
On a un code **plus clair, extensible** (il suffira d’ajouter une clé dans `tarifs`).

---

## 4. Bénéfices du TDD

* ✅ **Qualité** : moins de bugs, couverture de tests forte.
* ✅ **Confiance** : on peut refactorer sans peur.
* ✅ **Clarté** : les tests servent de documentation vivante.
* ✅ **Design** : pousse à écrire du code simple et modulaire.

---

## 5. Limites du TDD

* ⚠️ **Courbe d’apprentissage** : écrire les tests avant le code est contre-intuitif.
* ⚠️ **Temps initial plus long** (mais gain sur le long terme).
* ⚠️ **Pas adapté à tout** : difficile pour du prototypage rapide, ou des projets très exploratoires.
* ⚠️ **Nécessite une discipline forte**.

---

## 6. Comparaison TDD / Tests classiques

| Critère                      | Développement classique   | TDD                           |
| ---------------------------- | ------------------------- | ----------------------------- |
| Moment où on écrit les tests | Après le code             | Avant le code                 |
| Objectif principal           | Vérifier le code existant | Guider le design              |
| Risque de bugs               | Plus élevé                | Réduit                        |
| Documentation                | Souvent séparée           | Tests = documentation vivante |

---

## 7. Variantes du TDD

* **BDD (Behavior Driven Development)**
  → approche orientée **comportement métier** avec langage naturel (*Given/When/Then*).

* **ATDD (Acceptance Test Driven Development)**
  → tests définis avec les **utilisateurs** dès le départ (critères d’acceptation).

---

## 8. Exercice pratique (TP)

**Sujet : Implémenter une calculatrice simple en TDD.**

1. Écrire un test pour l’addition.

   * Exemple : `expect(addition(1,2)).toBe(3)`.
   * Le test échoue car la fonction n’existe pas encore (RED).

2. Implémenter `addition(a,b)` pour faire passer le test (GREEN).

3. Refactoriser le code si nécessaire (REFRACTOR).

4. Étendre le même cycle pour :

   * soustraction
   * multiplication
   * division

5. Ajouter un cas d’erreur :

   * division par zéro → lever une exception (`toThrow`).

---

## 🎯 Conclusion

Le **TDD** inverse la logique traditionnelle :
👉 *“On ne teste pas après avoir codé ; on code pour faire passer un test.”*

Il apporte discipline, confiance et robustesse — mais demande rigueur et expérience pour être bien adopté.


