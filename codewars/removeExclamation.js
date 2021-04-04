function removeExclamationMarks(s) {
    newstring = s.replace(/!/g, ''); //replaces every ! for ''(nothing)
    return newstring;
}

console.log(removeExclamationMarks("!njcnsniscimciw!nixmiwmidmi"))