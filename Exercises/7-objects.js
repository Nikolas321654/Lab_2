'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  let object1 = { name: 'Nickolas' };
  const object2 = { name: 'Viktor' };
  object1.name('Vladilen');
  object2.name('Marichka');
  object1 = object2;
};

module.exports = { fn };
