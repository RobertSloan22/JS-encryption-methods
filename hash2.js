const { createHash } = require('crypto')

function hash(input) {
    return createHash('sha256').update(input).digest('hex')

}

let password = 'SpaceForce!'
const hash2 = hash(password)
console.log(hash2)
