// setTimeout(() => {
//     console.log('Tea')
//     console.log('Ice Cream')
//     console.log('Coffe')
// }, 3000)



// const names = ['rinda', 'roy', 'ibnu'];
// const greet = names.map(name => `Hello ${name}`);

// console.log(greet)

/** sync-javacript */

// const gretting = () => {
//     console.log('good morning')
// }
// console.log('start');
// setTimeout(() => {
//     gretting();
// }, 2000)
// console.log('end');

/** callback */
console.log('start');

const login = (email, password, callback) => {
    setTimeout(() => {
        console.log('Now we have the data')
        callback ({ userEmail: email, password: password})
    }, 5000)
}

const getUserVideo = (email, callback) => {
    setTimeout(() => {
        callback(['vidio1', 'vidio2', 'vidio3']);
    }, 1000)
}
const getVideoDetail = (email, callback) => {
    setTimeout(() => {
        callback('This is title of video');
    }, 1000)
}


const user = login('email@yahoo.com', 123456, user => {
    console.log(user)
    getUserVideo(user.userEmail, (videos) => {
        console.log(videos)
        getVideoDetail(videos[0], (title) => {
            console.log(title)
        })
    })
});

setTimeout(() => {
    
    console.log('finish');
}, 10000)



