const compareCharacters = (a, b) => {
  if (a.health > b.health) {
    return -1;
  }
  if (a.health < b.health) {
    return 1;
  }

  return a.name.localeCompare(b.name);
};

export default compareCharacters;
