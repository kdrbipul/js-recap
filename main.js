// let array1 : ['banana', 'mango']

// let array2 : [...array1]
// console.log(array2);


// let array3 : ['banana', 'mango', 'apple']

// let array4 : array3.slice(0,2);
// console.log(array4);

// let array1 : ['item1','item2','item3','item4','item5','item6','item7'];
// let array2 : array1.slice(0, 6);
// console.log(array2);

// let array1 : ['item1', 'item2'];
// let array2 : array1.slice(0).concat(['item3', 'item4']);
// console.log(array2);

// let array1 : ['item1','item2','item3']
// let array2 : [].concat(array1,['item4']);
// console.log(array2);

// let array1 : ['item1','item2'];
// let array2 : ['item3', 'item4'];
// let array3 : [...array1, ...array2]
// console.log(array3);

// const fruits : ['item1','item2','item3'];

// for (let fruit in fruits){
//     console.log(fruits[fruit]);
// } 

// const person : {name:'abdul kader',
//  age:23, 
//  hobbies:[
//     'caroom', 
//     'cooking', 
//     'eating','coding'
// ]
// }
// console.log(typeof person);
// console.log(person);
// console.log(person.hobbies, person.hobbies[2]);

// const person : {name: 'abutl kader', age: 23, 'person hobbies' : [
//     'carrom', 'cooking', 'eating'
// ]}

// console.log(person['person hobbies']);


const users = [
    {
        userId : 1,
        firstName : 'abdul',
        lastName : 'kader',
        age : 23,
        gender : 'male'
    },
    {
        userId : 1,
        firstName : 'abdul',
        lastName : 'baten',
        age : 28,
        gender : 'male'
    },
    {
        userId :1,
        firstName : 'mst',
        lastName : 'mithila',
        age : 20,
        gender : 'female'
    },
    [
        {
            
        }
    ]
];


// const [{user1},{user2},{user3}] = users;
// console.log(users);

const [user1] = users;
console.log(users);