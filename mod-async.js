
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 3000);
        
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('Start');
doSomething();
console.log('Finish');

// 2

const getUsers = async () => {
    await fetch('/users.json')
        .then(response => response.json())
}

getUsers()