// HELPER FUNCTIONS
const calcAverage = function(numArr) {
  let total = 0;
  for (const num of numArr) {
    total += num;
  }
  return total / numArr.length;
}

const benchmark = function(functionsToRun, cycles) {
  const results = {};

  // INPUT VALIDATION
  let proceed = true;
  if (!functionsToRun || !Array.isArray(functionsToRun) || functionsToRun.length === 0) {
    console.log('Please pass in an array')
    proceed = false;
  }
  // make sure cycles is passed in and is an integer
  if (!cycles || typeof(cycles) != "number" || cycles % 1 !== 0) {
    console.log('Please enter a valid integer value as the second argument ')
    proceed = false;
  }
  if (!proceed) {
    return console.log('The arguments you passed in to the benchmark function are invalid.')
  }


  for (const target of functionsToRun) {
    let runtimes = [];
    let i = 0;

    // console.log(target());

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
      history: [...runtimes]
    }
  }


  console.log(results)

}


const myFunc = function() {
  console.log('hi');
  return 'works';
}

const func2 = function() {
  console.log('yay');
}

benchmark([myFunc, func2], 200)

// refArray = [];
// while (refArray.length <= 1000000) {
//   refArray.push(Math.random());
// }

// benchmark(() => {
//   const newArray = [];
//   for (item of refArray) {
//     newArray.push(item);
//   }

//   // // max benchmark: 107 ms
//   // const newArray = refArray.map(item => item);

//   // // max benchmark: 5 ms
//   // const newArray = [...refArray];
// });






