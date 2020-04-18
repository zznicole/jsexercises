//Funcions
/*//Class exercise part1
//Write a function which accepts an argument and returns the type of the argument.
function sayHello(name) {
     return name;
}

document.write(`<h1>Good afternoon ${name}</h1>`);
  

//Write a function that accept two integers and returns the larger one.
 function largerNumber(number1,number2) {
     if (number1 >= number2) {
         return number1;
     } else {
         return number2;
     }
  }

alert(largerNumber('3','3'));

//Write a function that show how old a dog in human years, it should take one 
//argument - puppy’s age. 1 human year is 7 dog years. The function should return a string like “Your doggie is NN years old in dog years!”
function dogAge(ageNumber){
    let age = ageNumber * 7;
    return `your dog is ${age} years in dog years.`;
}

alert(dogAge(5));


//Class exercises part2
// 1.Write a function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(string) {
  let vowels = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            vowels += 1;
        } else if (string[i] === 'e') {
            vowels += 1;
        } else if (string[i] === 'i') {
            vowels += 1;
        } else if (string[i] === 'o') {
            vowels += 1;
        } else if (string[i] === 'u') {
            vowels += 1;
        }
    }
    return `There are ${vowels} vowels in this sentence.`;
}
    
alert(countVowels('Have a lovely holiday!'));


// 2.Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 
//1 hour 25 minutes 43 seconds returns 5145 seconds.

function seconds(hrs, mins, secs) {
    return hrs * 60 * 60 + mins * 60 + secs;
}

console.log(seconds(1, 25, 43));


// 3.Write a function that accepts two arguments: a string and a character. The function has to count the number of 
//occurrences of the specified character within the string. For example, there are 2 occurrences of a character “o” in the string “Hello world”.

function countCharacters (sentence, character) {
    let countCharacter = 0;

    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] == character) {
            countCharacter += 1;
        }
    }

    return countCharacter;
}

console.log(countCharacters ('Happy Easter, tomas', 't'));
*/ 

// Write a function that reverse a number. For example, 12345 = 54321.
//  function reverseIt(reverseNumber) {
//      for (let i = reverseNumber; i > 0; i--) {
//         return reverseNumber[i];
//     }
//  }

//  console.log(reverseIt(10)); 


// Objects
// class exercises 
// 1.  Write a program that lists the properties of an object. For example, for the object
// let student = {
//   name: "Jane Rayy",
//   class: "VI",
//   age: 12
// };
// Output will be: name, class, age
// let student = {
//     name: 'David Johns',
//     class: 'I',
//     age: 7
// };
// console.log(student);

// 2.  Create an object that holds information of your favorite recipe. 
// It should have properties for title (a string), servings (a number), and ingredients 
// (a string, each ingredient separated by a comma). Display the recipe information on the 
// webpage. Use heading for the title. Use paragraphs for other info. For example:
// Mole
// Servings: 2
// Ingredients: cumin, cocoa, cinnamon

// let favDish = {
//     title: 'Spaghetti',
//     servings: 4,
//     ingredients: 'Olive Oil, Garlic, Basil, Salt, BlackPepper, Pasta'
// }
// document.write('<h1>' + favDish.title + '</h1>');
// document.write('<p>' + favDish.servings + '</p>');
// document.write('<p>' + favDish.ingredients + '</p>')




// ???3. Write a function to get a copy of the object where the keys have become the values and the values become the keys. For example, for the object
// let person = {
//   name: 'Alex',
//   lastname: 'Doe',
//   age: 25,
// };
// The resulting object will be
// {
//    Alex: 'name',
//    Doe: 'lastname',
//    '25': 'age'
// };

// let customer = {
//   name: 'Emma',
//   lastname: 'Love',
//   age: 30,
//   displayInfo: function() {
//       console.log(customer.value + customer.key)
//   }
// }

// Array
// 1. Suppose we have this array: people = ["Alex", "Mary", "Devon", "James"]; Do the following manipulations with the array: 
    // 1) Remove “James” from the array; 
    // 2) Remove “Alex” from the array; 
    // 3) Add your name to the beginning of the array; 
    // 4) Add “Jane” to the end of the array; 
    // 5) Using for-loop, write all names of the changed array to the webpage using document.write() .

// let people = ['Alex', 'Mary', 'Devon', 'James']

// let removeLast = people.pop();
//   document.write(people);

// let removeFirst = people.shift();
//   document.write(people);
  
// let addFirst = people.unshift('Nicole');
//   document.write(people);

// let addLast = people.push('Jane');
//   document.write(people);

// for (let item of people) {
//     document.write[`removeLast,removeFirst, addFirst, addLast`]
// }

// 2. Write a function that accepts an array and returns a reversed version of it. Do not use the reverse() function. 
//    For example: ['a', 'b', 3, 'c', [], 10] will be [10, [], 'c', 3, 'b', 'a'] .

// function reverseArray(myArray) {
//   let result = [];
// //  for (let i = 0; i < myArray.length; i++) {
//   for (let i = myArray.length-1; i >= 0; i--) {
//         result.push(myArray[i]);
//   }
//   return result
// //  return result.reverse();
// }
    

// console.log(reverseArray(['a', 'b', 3, 'c', [], 10]));
// // // 3. Write a script that displays the reading status of the following books (either to the webpage or to the console).
//    let myLibrary = [ 
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     isRead: true
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     isRead: true
//   },
//   {
//     author: 'Suzanne Collins',
//     title:  'Mockingjay: The Final Book of The Hunger Games', 
//     isRead: false
// }];
// // // Example output:
// // // I already read ‘The Road Ahead’ by Bill Gates
// // // I already read ‘Walter Isaacson’ by Steve Jobs
// // // I still need to read ‘Mockingjay: The Final Book of The Hunger Games’ by Suzanne Collins

// function readStatus() {
//     // let i = 0;
//     // while (i < myLibrary.length) {
//     //   .. do stuff ..;
//     //   return;
//     //   i++;
//     // }
// //   for (let i = 0; i < myLibrary.length; i++ ) {
//   for (let key of myLibrary) {
        
//     if (key.isRead == true) {
//         document.write("<p>I already read " + key.title + " by " + key.author + "</p>");
//     } else {
//         document.write("<p>I still need to read " + key.title + " by " + key.author + "</p>");
//     }  
//   }
// }
    
//  readStatus();

/ more advanced arrays and context of functions 18/4
//  1. Suppose we have an array of people.
// let people = ["Mary", "Greg", "Jane", "James"]; Using the splice() function, 
// remove “Jane” from the array and add “Elizabeth” and “Artie”.  Then the array 
// should look like this [“Mary”, “Greg”, “Elizabeth”, “Artie”, “James”].
// let people = ['Mary', 'Greg', 'Jane', 'James'];
// people.splice(people.indexOf('Jane'), 1, 'Elizabeth', 'Artie');
// console.log(people);

//  2. Suppose we have an array of objects.
// books = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//   }
// ];
// Using forEach() function, print each element to the webpage in the following way:
// 1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
// 2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’


let books = [
  {
		author: 'Bill Gates',
		title: 'The Road Ahead',
  },
  { 
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
  }
]

books.forEach(function(book, i) {
	document.write(`<p>${i + 1}. Book '${book.title}' is written by ${book.author}`)
})

// 3. Suppose we have an array of numbers.
// let numbers = [112, -20, 52, 0, -1, 944];
// Using filter() function, create a new array consisting only positive numbers.

let numbers = [112, -20, 52, 0, -1, 944];
positiveNumber = numbers.filter(function(item) {
	return item > 0;
})
console.log(positiveNumber);

// 4. Suppose we have an array of objects.
let keyValueArray = [
  {
    key: 'name',
    value: 'James'
  },
  {
    key: 'age',
    value: 27
  },
  {
    key: 'surname',
    value: 'Doe'
  }
];
// Using map() function, create a new array consisting reformatted objects
// like this:
// [
//   {
//     name: 'James'
//   },
//   {
//     age: 27
//   },
//   {
//     surname: 'Doe'
//   }
// ]
let reformattedArray = keyValueArray.map(function(item) {
	let newObject = {};
	newObject[item.key] = item.value;
	
	return newObject;
});

console.log(reformattedArray);

// 1. Create a constructor function called Video. The function should accept arguments of title (a string), 
// uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should 
// save them as properties of the object. Create a method of the Video constructor called watch() which 
// should log a string to the console like “You watched all 1800 seconds of Walking with Dinosaurs!” Create 
// a new object using the Video constructor and call the watch() method of it.

function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.watch = function() {
        console.log(`You watched all ${this.seconds} of ${this.title}!`)
    }

}
let video = new Video('Walking with Dinosaurs', 'BBC', 1800);
video.watch();

//  2. Suppose we have a student object:
// let student = {
//   name: 'Alex',
//   lastname: 'Wood'
// };
// Write a function called displayStudentInfo which accepts an object and returns the string “Your full 
// // name is NAME LASTNAME”. Use object destructuring to create “name” and “lastname” variables.

let student = {
	  name: 'Alex',
	  lastname: 'Wood'
	};

function displayStudentInfo(student) {
	let{name, lastname} = student;
	
	return `Your full name is ${name} ${lastname}.`
}
alert(displayStudentInfo(student));





