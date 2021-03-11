const { benchmark } = require('./benchmark')



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






