const sortCharacters = (chars) => {
  const characters = chars;
  let sortingDone = false;
  while (!sortingDone) {
    sortingDone = true;
    for (let i = 1; i < characters.length; i += 1) {
      if (characters[i - 1].health < characters[i].health) {
        sortingDone = false;
        const temp = characters[i - 1];
        characters[i - 1] = characters[i];
        characters[i] = temp;
      }
      if (characters[i - 1].health === characters[i].health) {
        if (characters[i - 1].name.localeCompare(characters[i].name) === 1) {
          sortingDone = false;
          const temp = characters[i - 1];
          characters[i - 1] = characters[i];
          characters[i] = temp;
        }
      }
    }
  }

  return characters;
};

export default sortCharacters;
