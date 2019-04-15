'use strict';

const makeBuffer = require('./stringBuffer');

test('Works with one call', () => {
  const buffer = makeBuffer();
  buffer('Simple string');
  expect(buffer())
    .toBe('Simple string');
});

test('Works with few calls', () => {
  const buffer = makeBuffer();
  buffer('abc');
  buffer('def');
  buffer('ghi');
  expect(buffer())
    .toBe('abcdefghi');
});

test('Works with whitespaces', () => {
  const buffer = makeBuffer();
  buffer('Simple string ');
  buffer('is buffered');
  buffer(' well');
  expect(buffer())
    .toBe('Simple string is buffered well');
});

test('Works with numbers', () => {
  const buffer = makeBuffer();
  buffer('The breakfast at ');
  buffer(10);
  buffer('AM');
  expect(buffer())
    .toBe('The breakfast at 10AM');
});

test('Many calls of buffer()', () => {
  const buffer = makeBuffer();
  buffer('a');
  buffer('a');
  buffer('a');
  buffer('a');
  buffer('a');

  expect(buffer())
    .toBe('aaaaa');

  buffer('a');
  buffer('a');
  buffer('a');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');

  expect(buffer())
    .toBe('aaaaaaaaasdfaasdfaasdfaasdfa');

  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('asdfa');
  buffer('AM');

  expect(buffer())
    .toBe('aaaaaaaaasdfaasdfaasdfaasdfaasdfaasdfaasdfaasdfaAM');
});

test('Works with 0 and empty string', () => {
  const buffer = makeBuffer();
  buffer('The breakfast at');
  buffer(' ');
  buffer(1);
  buffer(0);
  buffer('');
  buffer('AM');
  expect(buffer())
    .toBe('The breakfast at 10AM');
});
