// reverse string
const reverseString = (str) => {
    return str
        .split('')
        .reverse()
        .join('');
}

const stringKebalik = (str) => {
    let balik = '';
    for (let index = 0; index < str.length; index++) { 
        balik = str[index] + balik;
        
    }
    return balik;
}

const reverse = (str) => {
    let reverseString = '';
    for(let string of str){
        reverseString = string + reverseString;
    }
    return reverseString;
}
// use foreach
const revString = (str) => {
    let revString = '';
    str.split('').forEach(element => {
        revString = element + revString;
    });
    return revString;
}

const result = reverse('hello');
const result1 = stringKebalik('hello');
const result2 = revString('hello');
console.log(result);
console.log(result1);
console.log(result2);
console.log('====================================');
console.log('====================================');

// polindrome function
 const isPolindrome = (str) => {
    const polindrome = str.split('').reverse().join('');

    return polindrome === str;
 }
 const test = isPolindrome('annah');
 console.log(test);

//  reverse number
const reverseNumber = (int) => {
     const revInt = int.toString().split('').reverse().join('');

     return parseInt(revInt);
   
}
const item = reverseNumber(12345);
console.log(item);

// capitalize letter
const capitalizeLetter = (str) => {
    const strArray = str.toLowerCase().split(' ');

    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
        
    }
    return strArray.join(' ');
}

let input = capitalizeLetter('i do love u');
console.log(input);

const capatalLetter = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
}

const output = capatalLetter('i love u');
console.log(output)

const fizBuzz = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
          console.log('fizz')
      } else if(i % 5 === 0){
          console.log('Buzz')
      } else if(i % 15 === 0){
          console.log('FizzBuzz')
      } else{
          console.log(i)
      }
        
    }
}
console.log(fizBuzz())

// longest word

const longestWord = (str) => {
    let arr = str.toLowerCase().match(/[a-z0-9]+/g);

    let sorted = arr.sort((a, b) => b.length - a.length);

    let moreThanOne = sorted.filter(word => word.length === sorted[0].length)

    if(moreThanOne.length === 1){
        return moreThanOne[0];
    } else{
        return moreThanOne;
    }

   
}
let o = longestWord('hai dunia tipu tipu');
console.log(o)

// anagram
const anagram = (str1, str2) => {
    return formatStr(str1) === formatStr(str2);

}
const formatStr = (str) => {
    return str
        .replace(/^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

let a = anagram('alaba', 'blaa');
console.log(a)

const polindrome = (str) => {
    const test = str.split('').reverse().join('');

     return str === test ? true : false;
}

let check = polindrome('racecare');
console.log('tes polindrome',check)