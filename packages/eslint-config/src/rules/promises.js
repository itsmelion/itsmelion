export default {
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/always-return': 'error',
  'promise/catch-or-return': 'error',
  'promise/no-nesting': 'warn',

  // Disallow await inside of loops
  'no-await-in-loop': 'error',

  // Require error handling in Node-style (err, data) callbacks
  'n/handle-callback-err': 'error',

  // Prefer arrow functions for callbacks
  'prefer-arrow-callback': 'warn',

  // Replaces no-catch-shadow (deprecated, IE8-only concern) —
  // broader: flags all variable shadowing, not just in catch blocks
  'no-shadow': 'warn',
};
