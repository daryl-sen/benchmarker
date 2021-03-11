const { benchmark } = require('./benchmark')



// USAGE EXAMPLE - run `node index.js`
refArray = [];
while (refArray.length <= 1000000) {
  refArray.push(Math.random());
}

results = benchmark([
  // anonymous function 0
  () => {
    const newArray = [];
    for (item of refArray) {
      newArray.push(item);
    }
  },

  // anonymous function 1
  () => {
    const newArray = refArray.map(item => item);
  },

  function func3() {
    const newArray = [...refArray];
  }
], 5);

console.log(results);






