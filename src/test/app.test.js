import compareCharacters from '../js/app';
import Character from '../js/domain';

test('characters should be sorted by health', () => {
  const characters = [
    new Character('мечник', 10),
    new Character('маг', 100),
    new Character('лучник', 80),
  ];

  const expectedCharacters = [
    new Character('маг', 100),
    new Character('лучник', 80),
    new Character('мечник', 10),
  ];

  const result = characters.sort(compareCharacters);

  expect(result).toEqual(expectedCharacters);
});

test('characters should be sorted by name when healths are equal', () => {
  const characters = [
    new Character('мечник', 10),
    new Character('маг', 10),
  ];

  const expectedCharacters = [
    new Character('маг', 10),
    new Character('мечник', 10),
  ];

  const result = characters.sort(compareCharacters);

  expect(result).toEqual(expectedCharacters);
});
