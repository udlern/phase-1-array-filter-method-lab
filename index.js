function findMatching(array, string) {
    const matchingListOfDrivers = array.filter(element => element.toLowerCase() === string.toLowerCase())
    return matchingListOfDrivers;
}

function fuzzyMatch (array, string) {
    const firstLettersMatching = array.filter(element => element[0] === string[0])
    return firstLettersMatching
}

function matchName (array, string) {
    const namePropertyMatching = array.filter(element => element.name === string)
    return namePropertyMatching;
}
