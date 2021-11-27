import Swordsman from '../js/classes/Swordsman';

test('should create Swordsman', () => {
  const swordsman = new Swordsman('User');
  expect(swordsman.name).toBe('User');
});

test('name length', () => {
    expect(() => new Swordsman("fffffffffffff")).toThrow('Character name length must be 3-9 symbols');
})