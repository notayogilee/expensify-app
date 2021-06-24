const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('Should return the sum of two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('Should return a greeting from name', () => {
  const greeting = generateGreeting('Lee');

  expect(greeting).toBe('Hello Lee');
});

test('Should generate greeting when not given a name', () => {
  const greeting = generateGreeting();

  expect(greeting).toBe('Hello Anonymous')
})