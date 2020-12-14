let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let Budget = require('../models/Budget');

router.route('/create').post((req, res, next) => {
    Budget.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});


router.route('/').get((req, res, next) => {
  Budget.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})

router.route('/month/chart').get((req, res, next) => {
    const month = new Date().getMonth();
    const year = parseInt(2020);
    Budget.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
  });

module.exports = router;
