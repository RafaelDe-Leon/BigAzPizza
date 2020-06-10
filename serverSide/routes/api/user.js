const router = require('express').Router();
const userController = require('../../controllers/userController');

// finds user information by Id, matches "api/user/info"
router.route('/info').get(userController.findUserById);

// Matches with '/api/user/findAllUsers'
router.route('/findAllUsers').get(userController.findAllUsers);
// Matches with '/api/user/update'
router.route('/update').put(userController.update);

module.exports = router;
