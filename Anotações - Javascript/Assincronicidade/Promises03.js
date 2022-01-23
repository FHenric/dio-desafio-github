//Metodo sem promise

// const betterDev = 'Filipe';

// function whoIsBetterCallback(callback, errCallback) {
//     if (betterDev != 'Filipe' && betterDev != 'Gabriel') {
//         errCallback({
//             name: 'This is wrong',
//             message: betterDev + '? Really!?'
//         })
//     } else {
//         callback({
//             name: betterDev,
//             message: 'CDFs are the best'
//         })
//     }
// }

// whoIsBetterCallback((result) => {
//     console.log(result.name + '? Yeah! ' + result.message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })

//Metodo com promise

const betterDev = 'Leticia';

function whoIsBetterCallback(callback, errCallback) {

    return new Promise((resolve, reject) => {

         if (betterDev != 'Filipe' && betterDev != 'Gabriel') {
            reject({
                name: 'This is wrong, ',
                message: betterDev + '? Really!?'
            })
        } else {
            resolve({
                name: betterDev,
                message: 'CDFs are the best!!'
            })
        }
    })
}
   

whoIsBetterCallback()
    .then((result) => {
    console.log(result.name + '? Yeah! ' + result.message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})