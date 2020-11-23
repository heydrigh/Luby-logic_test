//1)
function repeatArr(times, letter) {
  let result = [];

  for (var i = 0; i < times; i++) {
    result.push(letter);  
 }
 console.log(result);
}
repeatArr(3, 'a');

//2)
function invertArr(input) {
  let result = [];
  for(var i = input.length-1; i >= 0; i--) {
    result.push(input[i]);
  }
  console.log(result);
}
let input = [1, 2, 3, 4];
invertArr(input);

//3)
let array = [1,2,'', undefined];

const filtered = array.filter(function(element) { return element; });

console.log(filtered);

//4)
let arrayInArray = [["c",2],["d",4]];

const objectfied = Object.fromEntries(arrayInArray);

console.log(objectfied);

//5)
let inputArray = [5,4,3,2,5];

let forDeletion = [3, 5]

inputArray = inputArray.filter(item => !forDeletion.includes(item))

console.log(inputArray)

// 6)

let duplicatedArray = [1,2,3,3,2,4,5,4,7,3];

const noDuplicates = new Set(duplicatedArray);

console.log(noDuplicates);

// 7)

function compareArrays (arr1, arr2) {
  if (JSON.stringify(arr1)==JSON.stringify(arr2) ) {
    return true;
  } else {
    return false;
  }
}

console.log(compareArrays([1,2,3,4],[1,2,3,4]));

// 8)
let megaArray = [1, 2, [3], [4, 5]];

const singleArray = megaArray.flat(1);

console.log(singleArray);


// 9)

function chunk(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === size) {
      chunkedArr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2));

// 10)

let firstArray = [6, 8];
let secondArray = [8, 9];
let jsonArray = [];

jsonArray = firstArray.filter(i => {
   return secondArray.includes(i) ;
});

console.log(jsonArray);
