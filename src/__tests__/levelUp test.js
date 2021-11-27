import Daemon from '../js/classes/Daemon';

test('should level up', () => {
  const character = new Daemon('User');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(48);
});

test('should throw error', () => {
  const character = new Daemon('User');
  character.health = 0;
  expect(() => character.levelUp().toThrow('This character is dead')
)})