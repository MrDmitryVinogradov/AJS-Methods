import Character from '../js/classes/Character';

test('should throw error', () => {
  expect(() => new Character('Dima', 0).levelUp()).toThrow('This character is dead');
});
