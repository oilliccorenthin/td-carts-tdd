# 🎓 Module Tests Unitaires avec Jest & TDD

## Objectifs pédagogiques
- Découvrir Jest et les bases du test unitaire.
- Explorer tous les concepts : assertions, organisation, erreurs, mocks, spies, timers, snapshots, coverage.
- Mettre en pratique avec un TD fil rouge en **TDD** (Test Driven Development).

---

# 🟢 Partie 1 — Drills Jest (exercices indépendants)

## Séance 1 : Bases & Assertions
1. **Addition**
   - Implémenter `addition(a,b)`.
   - Tester avec `expect(...).toBe(...)`.

2. **Aire d’un rectangle**
   - Implémenter `aireRectangle(longueur, largeur)`.
   - Tester avec deux cas.

3. **Palindrome**
   - Implémenter `isPalindrome(str)`.
   - Ignorer espaces/majuscules.
   - Tester avec `toBeTruthy` / `toBeFalsy`.

4. **Compter les mots**
   - Implémenter `countWords(str)`.
   - Tester avec `toEqual`.

---

## Séance 2 : Organisation & Paramétrisation
5. **Organiser avec describe**
   - Créer `mathUtils.js` avec `addition`, `soustraction`, `multiplication`.
   - Grouper avec `describe("Calculatrice", ...)`.

6. **test.each**
   - Implémenter `carre(x)`.
   - Tester avec plusieurs valeurs via `test.each`.

---

## Séance 3 : Gestion d’erreurs & Matchers avancés
7. **Division**
   - Implémenter `division(a,b)`.
   - Lever une erreur si `b=0`.
   - Tester avec `toThrow("Division par zéro")`.

8. **Pair/impair**
   - Implémenter `estPair(n)`.
   - Tester avec `toBeTruthy` / `toBeFalsy`.

9. **Contient mot**
   - Implémenter `contientMot(phrase, mot)`.
   - Tester avec `toContain`.

---

## Séance 4 : Mocks & Spies
10. **jest.fn**
    - Implémenter `saluer(user, envoyerMessage)`.
    - Tester avec `jest.fn()` que la fonction mock a été appelée avec `"Bonjour Alice"`.

11. **spyOn**
    - Créer un objet `utilisateur` avec `direBonjour()`.
    - Utiliser `jest.spyOn` pour vérifier que la méthode est appelée.

12. **jest.mock**
    - Créer `api.js` avec `fetchData()`.
    - Dans `service.js`, appeler `api.fetchData()`.
    - Dans le test, `jest.mock("./api")` pour simuler la réponse.

---

## Séance 5 : Timers & Async
13. **setTimeout**
    - Implémenter `reveille(cb)` qui exécute `cb` après 5 secondes.
    - Tester avec `jest.useFakeTimers()` et `advanceTimersByTime`.

14. **setInterval**
    - Implémenter `attendreBus(cb)` qui appelle `cb` toutes les 10 minutes.
    - Tester qu’après 30 minutes, `cb` a été appelé 3 fois.

15. **Promesse**
    - Implémenter `fetchUser(api,id)` qui renvoie une promesse.
    - Simuler succès et erreur avec `jest.fn().mockResolvedValue` / `mockRejectedValue`.

---

## Séance 6 : Snapshots & Coverage
16. **Snapshot**
    - Implémenter `genererProfil()` qui retourne un objet `{ id: 1, nom: "Alice" }`.
    - Tester avec `toMatchSnapshot()`.

17. **Coverage**
    - Ajouter `"test": "jest --coverage"` dans `package.json`.
    - Exécuter les tests et interpréter le rapport.

---

# 🔵 Partie 2 — TD Fil Rouge : Panier E-Commerce en TDD

## Objectif
Construire une application simple de **panier e-commerce** en TDD avec itérations Red–Green–Refactor.

## Périmètre fonctionnel
- **S1** : Ajouter un article au panier avec quantité.
- **S2** : Mettre à jour / retirer un article.
- **S3** : Calculer total HT, TVA, TTC.
- **S4** : Gérer des coupons (-10% ou -5€).
- **S5** : Vérifier le stock via un dépôt (fake in-memory).
- **S6** : Checkout → vider panier + envoi email (mocké).
- **S7** : Recalcul debouncé (timers).

---

## Plan de travail

### Itération 0 — Squelette
- Créer `Cart.js` vide.
- Écrire un test `add()` qui échoue.

### Itération 1 — Ajouter article
- Écrire tests `add()`.
- Implémenter code minimal.
- Refactorer pour gérer `Map`.

### Itération 2 — Update/Remove
- Écrire tests pour `updateQty` et suppression.
- Implémenter.

### Itération 3 — Totaux & TVA
- Créer `vat.js` avec règles.
- Écrire tests pour `totals()`.
- Implémenter avec `toBeCloseTo`.

### Itération 4 — Coupons
- Créer `discounts.js`.
- Écrire tests Given/When/Then (coupon expiré, montant min).
- Implémenter logique.

### Itération 5 — Stock (service)
- Créer `InMemoryProductRepo`.
- Implémenter `CartService` qui vérifie stock avant ajout.
- Mock emailService pour checkout.

### Itération 6 — Timers debounce
- Implémenter recalcul debouncé à 200ms.
- Tester avec `jest.useFakeTimers()`.

### Itération 7 — Snapshot & Coverage
- Snapshot de la commande (`order`) au checkout.
- Exécuter `jest --coverage`.

---

## Évaluation
- Respect du cycle TDD.
- Qualité des tests (AAA vs GWT).
- Usage correct de mocks/spies/fakes.
- Couverture > 85%.
- Code clair et refactorisé.

---

# 🎯 Bilan
- **Drills** : explorer toutes les fonctionnalités de Jest (6 séances).  
- **TD fil rouge** : mettre en pratique TDD sur une app concrète (panier e-commerce).  
- Total : environ **12h de travail encadré** (équivalent mini-module).
