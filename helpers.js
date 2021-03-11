const calcAverage = function(numArr) {
  let total = 0;
  for (const num of numArr) {
    total += num;
  }
  return total / numArr.length;
}

const calcVariance = function(numArr) {
  
}

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
  calcAverage,
  validateInput
}