const { scryptSync, randomBytes } = require('crypto')

function signup(email, password) 
    const salt = randomBytes(16),toString('hex')
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')

    const user = { email, password: '${salt}:${hashedPassword}'}
}

function  login(email, password) {


}