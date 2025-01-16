// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    if (number1 > number2) {
        console.log("The bigger number is "+number1)
        return number1;
    }
    else if (number1 < number2) {
        console.log("The bigger number is "+number2);
        return number2;
    }

    else{
        console.log("Enter different numbers");
        return number1=number2;
    }
}

maxOfTwoNumbers(1, 3);


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) { 
    if (words.length===0){
        return null;
    }

    let longWord= words [0];

    for (let i=0; i<words.length; i++){
        if (words[i].length>longWord.length){
            longWord=words[i];
        }
    }
    return longWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length===0)  {
        return 0;
    }
    return sumNumbers (numbers) / numbers.length;
 }


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordSearch) { 
    if(words.length===0){
        return null;
    }
    for (let i=0; i < words.length; i++){
        if (words[i]===wordSearch){
            return true;
        }
    }
    return false;
}