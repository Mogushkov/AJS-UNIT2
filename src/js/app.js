export default function sortedCharacters(characters) {
    return characters.sort((a, b) => b.health - a.health);
  }