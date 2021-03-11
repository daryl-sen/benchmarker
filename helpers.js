const validateInput = function(functionsToRun, cycles) {
  // make sure functions are passed in as an array
  if (!functionsToRun || !Array.isArray(functionsToRun) || functionsToRun.length === 0) {
    return false;
  }

  // make sure cycles is passed in and is an integer
  if (!cycles || typeof(cycles) != "number" || cycles % 1 !== 0) {
    return false;
  }

  return true
}

module.exports = {
  validateInput
}