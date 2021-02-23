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