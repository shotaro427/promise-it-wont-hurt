var es = require('es6-promise')

var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill("FULFILLED!")
    }, 300);
})

promise.then(function (s) {
    console.log(s)
})