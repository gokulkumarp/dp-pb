let express = require('express'),
    router = express.Router();

    let Expense = require('../models/Expense');
    let Budget = require('../models/Budget');

router.route('/create').post((req, res, next) => {
    Expense.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            Budget.findOne({ name: req.body.budget }, function(err, obj) {
                const id = obj._id;
                Budget.updateOne(
                    { _id: id },
                  { $inc: { capacity: req.body.expense } }
                ).then((data) => {
                  if (!data) {
                    return res.status(400).json({
                      errors: "Not Updated",             
                    });
                  }
                  next();
                });
              });
            res.json(data)
        }
    })
});


router.route('/').get((req, res, next) => {
  Expense.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})

router.route('/month/chart').get((req, res, next) => {
    Expense.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
  })

module.exports = router;
