# LOG.md — Exercici JavaScript (5-exercise)

## Materials consultats

- MDN Web Docs — [Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- MDN Web Docs — [Array.prototype.map()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- MDN Web Docs — [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- MDN Web Docs — [Sintaxi spread (...)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- MDN Web Docs — [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- {JSON} Placeholder — [API falsa per a proves](https://jsonplaceholder.typicode.com/)
- Material i apunts de l'assignatura EA (Seminari de JavaScript), carpetes `1-JS`, `2-functional` i `3-javascript-arrays` d'aquest mateix repositori

## Ús d'intel·ligència artificial generativa

No s'ha utilitzat cap eina d'intel·ligència artificial generativa per resoldre aquest exercici. Tot el codi ha estat escrit, provat i depurat manualment a partir del codi base proporcionat i dels materials consultats llistats anteriorment.

## Registre d'evolució del treball

1. **Codi base**: es parteix del fitxer `exercise.js` proporcionat al repositori, amb l'esquelet del `fetch` a `https://jsonplaceholder.typicode.com/users/` i el punt d'entrada `// YOUR CODE STARTS HERE`.
2. **Filtratge**: implementació de `filter` per quedar-se només amb els usuaris d'`id` parell (variable `pares`).
3. **Transformació**: implementació de `map` per generar objectes nets `{ id, name, city }` (variable `info`), extraient `city` de l'objecte niat `address`.
4. **Inserció sense mutació**: creació de l'objecte `GuestUser` i inserció al principi de la llista mitjançant l'operador spread (`[GuestUser, ...info]`), sense mutar l'array `info` original.
5. **Estadístiques**: ús de `reduce` sobre la llista filtrada (`pares`) per sumar la longitud de tots els `username`.
6. **Gestió d'errors**: manteniment del `.catch` per capturar errors de la petició `fetch`.
7. **Verificació**: execució del fitxer amb Node.js contra l'API real per confirmar que la sortida per consola coincideix amb el comportament esperat a cada pas (usuaris parells, objectes nets, llista amb Guest User, i total de caràcters).
