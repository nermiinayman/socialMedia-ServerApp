var express = require('express'); 
var router = express.Router(); 
const control = require('../controllers/userController'); 

 
//add user
router.post('/addUser', control.addUser); 
 
//get user 
router.get('/', control.getUsers); 

//find user with id
router.get('/:id', control.getOneUser); 

//update order 
router.patch('/:id', control.updateUser); 
 
//delete order 
router.delete('/:id', control.deleteUser); 
 
 
module.exports = router;