import Daemon from '../js/classes/Daemon';

test('should get damage', () => {
  const character = new Daemon('User');
  character.damage(10);
  expect(character.health).toBe(94)
});

test('should zero health', () => {
  const character = new Daemon('User');
  character.health = 1;
  character.damage(10);
  expect(character.health).toBe(0);
});


