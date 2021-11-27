import Magician from '../js/classes/Magician';

test('should create Magician', () => {
  const magician = new Magician('User');
  expect(magician.name).toBe('User');
});

test('name length', () => {
    expect(() => new Magician("fffffffffffff")).toThrow('Character name length must be 3-9 symbols');
})