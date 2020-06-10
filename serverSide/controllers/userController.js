const db = require('../models');

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    //validate request
    if (
      req.body.firstName &&
      req.body.lastName &&
      req.body.email &&
      req.body.message
      // req.body.password &&
      // req.body.passwordConf &&
    ) {
      //create data
      const userData = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        message: req.body.message
        // password: req.body.password,
      };
      db.Users.create(userData)
        .then(dbModel => {
          // setting the client cookie
          res.cookie('userId', dbModel._id, {
            expires: new Date(Date.now() + 900000),
            httpOnly: false
          });
          // set the session
          req.session.userId = dbModel._id;
          return res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
  },

  // set along with routes/api

  findUserById: function(req, res) {
    db.User.findById({ _id: req.session.userId })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findAllUsers: function(req, res) {
    db.User.find()
      .sort({ lastName: 1 })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.User.updateOne(
      { _id: req.session.userId },
      { $set: req.body },
      { new: true }
    )
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }

  // signout: function(req, res, next) {
  //   req.session.destroy(function(err) {
  //     if (err) {
  //       return next(err);
  //     } else {
  //       return res.redirect('/');
  //     }
  //   });
  // },

  // login: function(req, res, next) {
  //   console.log('login');

  //validate request
  // if (req.body.email && req.body.password) {
  //   db.User.authenticate(req.body.email, req.body.password, function(
  //     error,
  //     user
  //   ) {
  //     if (error || !user) {
  //       var err = new Error('Wrong email or password.');
  //       err.status = 401;
  //       return next(err);
  //     } else {
  //       console.log(`login: `, user._id);
  //       res.cookie('userId', user._id, {
  //         expires: new Date(Date.now() + 900000),
  //         httpOnly: false
  //       });
  //       req.session.userId = user._id;
  //       console.log('redirect');
  //       return res.redirect('/myaccount');
  //     }
  //   });
  //   } else {
  //     var err = new Error('All fields required.');
  //     err.status = 400;
  //     return next(err);
  //   }
  // },

  // authenticate: function(req, res, next) {
  //   console.log('inside auth');
  //   console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);
  //   db.User.findById(req.session.userId).exec(function(error, user) {
  //     if (error) {
  //       return next(error);
  //     } else {
  //       if (user === null) {
  //         res.cookie('userId', '').status(401);
  //         return res.json('Not authorized! Go back!');
  //       } else {
  //         res.cookie('userId', user._id, {
  //           expires: new Date(Date.now() + 900000),
  //           httpOnly: false
  //         });
  //         return res.json(true);
  //         return res.send(
  //           '<h1>Mail: </h1>' +
  //             user.email +
  //             '<br><a type="button" href="/logout">Logout</a>'
  //         );
  //       }
  //     }
  //   });
  // },

  // adminFindUserById: function(req, res) {
  //   db.User.findById(req.params.id)
  //     .then(dbUser => res.json(dbUser))
  //     .catch(err => res.status(422).json(err))
  // },
};
