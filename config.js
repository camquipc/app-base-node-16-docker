const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '5000';

module.exports = {
    NODE_ENV,
    HOST,
    PORT
}