# JS Benchmarker (NodeJS)

Benchmarker is a basic JS function benchmarking utility. This version is built to run with NodeJS apps and not compatible for use with browsers. For the browser-friendly version, check the `version/vanilla-js` branch. It uses Node's built-in `perf_hook` library to measure a function's completion time. To get readings that are more accurate, the number of times a function runs can be specified using the `cycles` argument.

## Dependencies
* perf_hooks (JS built-in)
* mathjs

## Installation (npm)
Run `npm install @darylt/benchmarker` in your npm project folder.

## Installation (Github Source Code)
Run `npm install` to install both dependencies.

## Usage

The benchmarker takes in an array of callback functions and runs them n number of times. It returns an array of objects containing each tested function's name and average completion times. Anonymous functions will be named `AnonymousFuncN`, where N is the index position of that function in the callback array.

The `benchmark(functionsToRun, cycles)` function takes in two arguments.
1. `functionsToRun` - an array containing all the functions to benchmark.
2. `cycles` - an integer value that determines how many times to run each function.

To use this in the browser, use `const { benchmark } = require('path_to/benchmark.js')` near the start of the script, then call `benchmark()` as described above.

## Caution

The current iteration does not support asynchronous functions.

The benchmarked function will run normally, `benchmark()` does not prevent any functional side-effects. If your function's side effects depends on external factors, runtimes may differ.

For example, consider the following function:
```
let status = true;

// ...

const exampleFunc = function() {
  if (status) {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    status = false;
  }
};

results = benchmark([exampleFunc], 100);
```
The first time `exampleFunc` runs, it will execute the while loop. However, any subsequent runs will not because `status` has been set to false. Therefore the first reported completion time will be much higher than all subsequent runs of this function. To check the logged completion times, use `results.exampleFunc.perfHistory` or `results[0].perfHistory`. Use the latter if you passed in anonymous functions, or use its automatically-assigned name `AnonymousFuncN`, where N is the index of that function in the callback function array.
