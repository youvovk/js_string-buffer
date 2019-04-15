'use strict';

/**
 * Implement string buffer:
 *
 * Some programming languages have object "String Buffer" which accumulates
 * values inside. It can:
 *  - add value to the buffer
 *  - get current content
 *
 * Example of working function:
 * const buffer = makeBuffer();
 *
 * 'buffer' is a function which adds value to the buffer when call buffer(value)
 * and returns current buffer when called without params buffer(). Make sure the
 * function works well with numbers.
 *
 * buffer('The breakfast at ')
 * buffer(10)
 * buffer(' AM')
 *
 * buffer() === 'The breakfast at 10AM'
 *
 * @return {function}
 */
function makeBuffer() {
  // write code here
}

module.exports = makeBuffer;
