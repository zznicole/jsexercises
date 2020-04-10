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
 function reverseIt(reverseNumber) {
     for (let i = reverseNumber; i > 0; i--) {
        return reverseNumber[i];
    }
 }

 console.log(reverseIt(10)); 
