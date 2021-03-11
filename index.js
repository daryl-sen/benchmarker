const { benchmark } = require('./benchmark')

// const results = benchmark([myFunc, func2], 2000);
// console.log(results.func2);
// console.log(results.func2.perfHistory);



refArray = [];
while (refArray.length <= 1000000) {
  refArray.push(Math.random());
}

results = benchmark([
  () => {
    const newArray = [];
    for (item of refArray) {
      newArray.push(item);
    }
  },
  () => {
    const newArray = refArray.map(item => item);
  },
  () => {
    const newArray = [...refArray];
  }
], 5);

console.log(results);






