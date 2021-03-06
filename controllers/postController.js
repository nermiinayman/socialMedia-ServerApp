const Post = require('../models/post'); 
 
 //insert post
addPost = function (req, res, next) { 
    const post = new Post({ 
        desc: req.body.desc, 
        location: req.body.location, 
        imageLink: req.body.imageLink,
        user_id:req.body.user_id
    }); 
    post.save(). 
        then(resault => { 
            if (resault) { 
                res.status(200).json({ 
                    massage: 'post Added Successfully', 
                    resault: resault 
                }); 
            } else { 
                res.status(400).json({ 
                    massage: 'post Add Failed' 
                }); 
            } 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 

//insert many posts
addManyPosts = function(req,res){
    Post.insertMany(req.body). 
    then(resault => { 
        if (resault) { 
            res.status(200).json({ 
                massage: 'many posts Added Successfully', 
                resault: resault 
            }); 
        } else { 
            res.status(400).json({ 
                massage: 'posts Add Failed' 
            }); 
        } 
    }). 
    catch(err => { 
        res.status(404).json({ 
            massage: err 
        }); 
    }); 
}
 
//fetches all posts
getPosts = function (req, res, next) { 
    Post.find().then(resault => { 
            res.status(200).json({ 
                massage: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
//fetch a single post
getOnePost = function(req, res, next) { 
    Post.find({ _id: req.params.id }).then(resault => { 
            res.status(200).json({ 
                massage: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
//update a post
updatePost = function (req, res, next) { 
    const newPost = { 
        desc: req.body.desc, 
        location: req.body.location, 
        imageLink: req.body.imageLink,
        user_id:req.body.user_id
    } 
    Post.updateOne({ _id: req.params.id }, { $set: newPost }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'post updated Successfully', 
                resault: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
//delete a post
deletePost = function (req, res, next) { 
    Post.deleteOne({ _id: req.params.id }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'Post deleted Successfully', 
                resault: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
module.exports = { 
    addPost: addPost,
    addManyPosts:addManyPosts, 
    getPosts: getPosts, 
    getOnePost: getOnePost, 
    updatePost: updatePost, 
    deletePost: deletePost
}