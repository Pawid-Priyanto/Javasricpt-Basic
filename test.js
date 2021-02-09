let x = true;
let y = 0;

// setTimeout(() => {
//     x = false;
// }, 2000);

// setInterval(() => {
//     if(x){
//         console.log('hello', y++);
//     }
// }, 200);

// while(x){
//     console.log(x++);
// }

let id = setInterval(() => {
        console.log(y++)
}, 500);

setTimeout(() => {
    clearInterval(id)
}, 2000);