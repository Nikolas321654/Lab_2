'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = () => {
  const obj = { name: 'Marcus', city: 'Roma' };
  return obj;
};

module.exports = { createUser };
