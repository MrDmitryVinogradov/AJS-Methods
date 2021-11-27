import Undead from '../js/classes/Undead';

test('should create Undead', () => {
  const undead = new Undead('User');
  expect(undead.name).toBe('User');
});

test('name length', () => {
    expect(() => new Undead("fffffffffffff")).toThrow('Character name length must be 3-9 symbols');
})