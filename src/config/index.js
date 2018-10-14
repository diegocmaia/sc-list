const env = process.env.NODE_ENV || 'development'
const envConfig = require(`./env/${env}`).default

export default envConfig
