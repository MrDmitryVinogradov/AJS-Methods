import Bowerman from '../js/classes/Bowerman';

test('should create Bowerman', () => {
  const bowerman = new Bowerman('User');
  expect(bowerman.name).toBe('User');
});

test('name length', () => {
    expect(() => new Bowerman("fffffffffffff")).toThrow('Character name length must be 3-9 symbols');
})