module.exports = {
    name: process.env.LOGIN_NAME || 'admin',
    secret: process.env.LOGIN_SECRET || 'minerva',
    expires: process.env.LOGIN_EXPIRES || '1d',
    rounds: process.LOGIN_ROUNDS || 10,
}