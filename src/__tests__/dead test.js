import Character from '../js/classes/Character';
import Daemon from '../js/classes/Daemon'

test('should throw error', () => {
  const daemon = new Character('User', 0);
  expect(() => daemon.levelUp().toThrow('This character is dead')
)});
