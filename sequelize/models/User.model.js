
const Promise = require('bluebird')
const Sequelize = require('sequelize')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    role: {
      type: Sequelize.STRING,
      defaultValue:"user",
    },
    secret: Sequelize.STRING,
  }, {
    hooks: {
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }


  return User
}