var express = require('express'); 
var router = express.Router(); 
const control = require('../controllers/commentController'); 

 
//add comment to a post
router.post('/addComment', control.addComment); 
 
//get comments
router.get('/', control.getComments); 

//find comment with id
router.get('/:id', control.getOneComment); 

//update comment 
router.patch('/:id', control.updateComment); 
 
//delete comment
router.delete('/:id', control.deleteComment); 
 
 
module.exports = router;