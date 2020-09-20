const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Pritam',
            age: 25
        })
    }, 5000);
})

console.log('before');
promise.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 5000);
    })
}).then((str) => {
    console.log('does this run?',str);
}).catch((e) => {
    console.log('Error:',e);
})
console.log('after')