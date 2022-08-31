// Code your solution here
function findMatching(array, string) {
    const result = array.filter((el) => el.toLowerCase().includes(string.toLowerCase()));
    return result;
  }

  function fuzzyMatch (array, string) {
    const result = array.filter(element => element.startsWith(string))
  return result
}

function matchName (array, string) {
  return array.filter(element => element.name === string);
}
