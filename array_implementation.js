let arr = [1, 2, 3, "Hello", "World"];

console.log(arr)


console.log(arr.toString());
console.log(arr.join(' T ,'));

console.log(arr.pop());

console.log(arr.push(2));
console.log(arr);

console.log(arr.shift());


console.log(arr.unshift('Scroll'));
console.log(arr);


console.log(arr.length);


delete arr[1];
console.log(arr);

let arr1 = [5, 6, 7, 8];

let mgr = arr.concat(arr1);
console.log(mgr)

console.log('Deleted eles: ');
console.log(arr.splice(2, 3, 'JS', 'Practice', 'Training'));
console.log(arr);


console.log(arr.slice(2, 4));

console.log('Index of JS : ' + arr.indexOf('JS'));

arr2 = [2, 6, 1, 0];
console.log(arr2.sort());
console.log(arr2.reverse());