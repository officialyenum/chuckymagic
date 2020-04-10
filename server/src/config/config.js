/* eslint-disable */

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'chuckymagic',
        user: process.env.DB_USER ||'chuckymagic',
        password: process.env.DB_PASS || 'chuckymagic',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './chuckymagic.sqlite'

        }
    }
}
