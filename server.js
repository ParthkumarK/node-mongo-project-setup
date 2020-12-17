const express = require('express')
const mongoose = require('mongoose');
const app = express()
const { DBHOST, PORT, DBNAME, DBUSERNAME, DBPASSWORD } = require('./config')
const UserModel = require('./models/users.model')
const ProductModel = require('./models/product.model')

const mongoDBString = `mongodb+srv://${DBUSERNAME}:${DBPASSWORD}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`
const option = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(mongoDBString, option)
  .then(result => {
      app.listen(PORT, () => console.log(`Application listening on ${PORT}`));
      UserModel.save({email: 'pk@gmail.com', password: '12345'}).then(result => console.log('user is created')).catch(error => console.log('error to create', error.message))
  })
  .catch(err => {
    console.log(err);
  });