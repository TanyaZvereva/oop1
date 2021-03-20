import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie
} from '../app';

test('should throw error when directly create Character', () => {
  const expr = () => new Character('Yoda', 'Swordsman');
  expect(expr).toThrow(TypeError);
});

test("Должен выбрасывать ошибку, если создан персонаж с неправильным именем", () => {
  const bowman = () => new Bowman("I");
  expect(bowman).toThrow(TypeError);

});
test('should create Bowman', () => {
  const character = new Bowman('Yoda', 'Bowman');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Bowman');
});

test('should create Swordsman', () => {
  const character = new Swordsman('Yoda', 'Swordsman');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Swordsman');
});

test('should create Magician', () => {
  const character = new Magician('Yoda', 'Magician');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Magician');
});

test('should create Daemon', () => {
  const character = new Daemon('Yoda', 'Daemon');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Daemon');
});

test('should create Undead', () => {
  const character = new Undead('Yoda', 'Undead');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Undead');
});

test('should create Zombie', () => {
  const character = new Zombie('Yoda', 'Zombie');
  expect(character.level).toBe(1);
  expect(character.health).toBe(100);
  expect(character.name).toBe('Yoda');
  expect(character.type).toBe('Zombie');
});

