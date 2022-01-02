const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('get the user')
        // resolve({user: 'paw'})
        reject(new Error('Oops user not logged in'))
    }, 2000);
})

promise.then(result => {
    console.log(result)
}).catch(err => console.log(err.message))

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting data from youtube')
        resolve({video: ['vidio1', 'vidio2', 'vidio3']})
    }, 2000);
})


const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting data from facebook')
        resolve({email: 'tes@gmail.com'})
    }, 5000);
})

Promise.all([fb, yt])
.then(result => console.log(result))

const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Data Pertama');
        resolve({number: 10})
    }, 5000)
    
})

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Data Kedua');
        resolve({number: 20})
    }, 3000)
    
})

Promise.all([p1, p2])
.then(result => console.log(result))

