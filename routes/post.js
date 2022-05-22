var express = require('express'); 
var router = express.Router(); 
const control = require('../controllers/postController'); 

 
//add post
router.post('/addPost', control.addPost); 
 
//get post
router.get('/', control.getPosts); 

//find post with id
router.get('/:id', control.getOnePost); 

//update post 
router.patch('/:id', control.updatePost); 
 
//delete post
router.delete('/:id', control.deletePost); 
 
 
module.exports = router;