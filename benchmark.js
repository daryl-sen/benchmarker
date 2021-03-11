const { calcAverage, validateInput } = require('./helpers');

const benchmark = function(functionsToRun, cycles) {

  if (!validateInput(arguments[0], arguments[1])) {
    return;
  }
  
  const results = {};

  for (const target of functionsToRun) {
    let runtimes = [];
    let i = 0;

    while (i < cycles) {
      const start = Date.now();
      target();
      const end = Date.now();
      runtimes.push(end - start);
      i++;
    }

    results[target.name] = {
      average: calcAverage(runtimes),
      max: Math.max(...runtimes),
      min: Math.min(...runtimes),
      get perfHistory() {
        return [...runtimes];
      }
    }
  }

  return results;

}

module.exports = {
  benchmark
}