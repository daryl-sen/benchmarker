const { validateInput } = require('./helpers');
const { performance } = require('perf_hooks');
const math = require('mathjs');

const benchmark = function(functionsToRun, cycles) {
  console.log(`Testing ${functionsToRun.length} function(s) ${cycles} times each...`)

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

    const average = math.mean(runtimes);
    const max = math.max(runtimes);
    const min = math.min(runtimes);
    const range = max - min;
    const standardDeviation = math.std(runtimes);
    const variance = math.variance(runtimes);

    results[functionName] = {
      average,
      max,
      min,
      range,
      standardDeviation,
      variance,
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