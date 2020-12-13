const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (!data.email) {
    errors.email = 'Email field is required';
  }

  if (!validator.isLength(data.password, 6, 30)) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (!data.password) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
