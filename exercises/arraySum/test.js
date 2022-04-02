const arraySum = require('./index');

test('arraySum is a function', () => {
  expect(typeof arraySum).toEqual('function');
});

test('Sum of 2 numbers in an array is equal to the sum', () => {
  expect(arraySum([1, 4, 8, 2])).toEqual([8,2]);
});


test('Second case -> sum of 2 numbers in an array is equal to the sum', () => {
  expect(arraySum([1, 4, -10 , 20])).toEqual([-10,20]);
});
