'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Socrates', phone: '+380991112233' },
  { name: 'Plato', phone: '+380442223344' },
];

function findPhoneByName(name) {
  for (const cont of phonebook) {
    return cont === name;
  }
}

module.exports = { phonebook, findPhoneByName };
