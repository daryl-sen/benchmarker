const { calcAverage, validateInput } = require('./helpers');
const { performance } = require('perf_hooks');

const benchmark = function(functionsToRun, cycles) {
  console.log(`Testing each function ${cycles} times...`)

  if (!validateInput(arguments[0], arguments[1])) {
    return;
  }
  
  const results = {};

  for (const target of functionsToRun) {
    let runtimes = [];
    let i = 0;

    while (i < cycles) {
      const start = performance.now();
      target();
      const end = performance.now();
      runtimes.push(end - start);
      i++;
    }

    let functionName;
    if (target.name === '') {
      functionName = 'anonymousFunc' + functionsToRun.indexOf(target); 
    } else {
      functionName = target.name;
    }

    results[functionName] = {
      average: calcAverage(runtimes),
      max: Math.max(...runtimes),
      min: Math.min(...runtimes),
      get perfHistory() {
        return [...runtimes];
      }
    }
  }

  console.log('Testing complete, results will be returned as an object containing performance information for each tested function.');
  return results;

}

module.exports = {
  benchmark
}