
/** async await */
console.log('start');

const login = (email, password, ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data')
            resolve ({ userEmail: email})
        }, 5000)
    })
}

const getUserVideo = (email ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (['vidio1', 'vidio2', 'vidio3']);
        }, 1000)

    })
}
const getVideoDetail = (video ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve ('This is title of video');
        }, 1000)

    })
}


login('eamil@tes.com', 123456)
.then(user => console.log(user))
.then(user => getUserVideo(user))
.then(video => getVideoDetail(video[0]))
.then(detail => console.log(detail))


const displayUser = async () => {
    try {
        const loginUser = await login('email@yahoo.com', 1234567)
        const video = await getUserVideo(login.userEmail)
        const detail = await getVideoDetail(video[0])
        console.log(detail)
    } catch (error) {
        console.log('We could no get user videos')
    }
}
