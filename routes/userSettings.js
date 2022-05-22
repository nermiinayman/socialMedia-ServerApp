var express = require('express'); 
var router = express.Router(); 
const control = require('../controllers/userSettingsController'); 

 
//add userSettings 
router.post('/add_userSettings', control.add_userSettings); 
 
//get userSettings
router.get('/', control.get_userSettings); 


//update userSettings
router.patch('/:id', control.update_userSettings); 
 
 
 
module.exports = router;