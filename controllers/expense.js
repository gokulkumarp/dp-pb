let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let user = require('../models/Expense');

router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});


router.route('/').get((req, res, next) => {
  user.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})

module.exports = router;
