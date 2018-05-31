if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://iservice:db1234@ds235850.mlab.com:35850/iservice'}
} else {
  module.exports = {mongoURI: 'mongodb://iservice:db1234@ds235850.mlab.com:35850/iservice'}
}