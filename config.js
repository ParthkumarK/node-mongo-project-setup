require('dotenv').config()

module.exports = {
    DBHOST             : process.env.MONGO_HOST,
    PORT             : process.env.NODE_ENV === 'development' ? 8080 : process.env.PORT,
    DBUSERNAME         : process.env.MONGO_USER,
    DBPASSWORD         : process.env.MONGO_PASSWORD,
    DBNAME             : process.env.MONGO_DB
}