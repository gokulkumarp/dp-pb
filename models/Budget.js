const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    budget: {
        type: Number
    },
    date: {
      type: Date,
      required: true,
    },
  }, {
        collection: 'budgetapp'
    })

module.exports = mongoose.model('budgetapp', userSchema)