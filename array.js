//7.1: You have given array of strings. Your task is to obtain last two elements of given array using slice method?



let admins = ['john', 'paul', 'Neha', 'harry'];


let la=admins.splice(2,3)//mutators function


//console.log(la)
//console.log(admins)

//7.2: You have given an array of 5 elements(1-5). Your task is defined as below.

const arr = [1, 4, 7, 6, 8];

//You have to delete 2 elements starting from index 2.
const deletedElements = arr.splice(2, 2);

console.log(deletedElements)

//You have to add 3 new elements on index 1 choice.



arr.splice(1, 0, 2, 3, 5);



//Display the 2 deleted elements in console (from step 1)
console.log(arr )


//7.3: What happens if we use negative number inside slice method?

const arr1 = [1, 4, 7, 6, 8];
//Example : arr.slice(-2);

arr1.splice(-2)

console.log(arr1)


//7.4: You have given an array of nums. Create new Array with the help of nums array. In new Array each element will be a result of multiplication by 2 of the original array element


const arr2 = [1, 4, 7, 6, 8];


let nums=arr.map(arr2=>{


let temp=arr2*2;
return temp;

})

console.log(nums);


//7.6 You have given an array of scores in which score of each student stored. Create a new array with the help of original scores array in which only those scores exist greater than 50

const arr4 = [10, 40, 70, 60, 80];

let num5=arr4.filter(arr4=>arr4>40)

console.log(num5)





//You have given an array of numbers nums. You have to find sum of all array elements using reduce method?

let nums7 = [2, 3, 5, 7, 8, 4, 9];


const sum = nums7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log("Sum of all array elements:", sum);


//You have given an array of numbers nums. You have to find the index of value 8 using built-in method of array?

let nums8 = [2, 3, 5, 6, 8, 6, 4, 8];

const index = nums.indexOf(8);

console.log(index)



//You have given an array of objects of users as below. Find the specified user with name = "John" 

//Also find the position (index+1) of that user inside the array?

let users = [
  {
    name: 'Paul',

    age: 24,

    verified: true,
  },

  {
    name: 'John',

    age: 21,

    verified: false,
  },

  {
    name: 'Neha',

    age: 19,

    verify: true,
  },
];
   



let specifiedUser = users.find(user => user.name === "John");

console.log(specifiedUser)


const Pulse= users.findIndex(user => user.name === "John")+1;

console.log(Pulse)
