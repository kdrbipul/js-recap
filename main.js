// let array1 = ['banana', 'mango']

// let array2 = [...array1]
// console.log(array2);


// let array3 = ['banana', 'mango', 'apple']

// let array4 = array3.slice(0,2);
// console.log(array4);

// let array1 = ['item1','item2','item3','item4','item5','item6','item7'];
// let array2 = array1.slice(0, 6);
// console.log(array2);

// let array1 = ['item1', 'item2'];
// let array2 = array1.slice(0).concat(['item3', 'item4']);
// console.log(array2);

// let array1 = ['item1','item2','item3']
// let array2 = [].concat(array1,['item4']);
// console.log(array2);

let array1 = ['item1','item2'];
let array2 = ['item3', 'item4'];
let array3 = [...array1, ...array2]
console.log(array3);