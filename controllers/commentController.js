const Comment = require('../models/comment'); 
 
 //insert a comment
addComment = function (req, res, next) { 
    const comment = new Comment({ 
        commentText: req.body.commentText, 
        user_id: req.body.user_id,
        post_id: req.body.post_id
    }); 
    comment.save(). 
        then(resault => { 
            if (resault) { 
                res.status(200).json({ 
                    massage: 'comment Added Successfully', 
                    resault: resault 
                }); 
            } else { 
                res.status(400).json({ 
                    massage: 'comment Add Failed' 
                }); 
            } 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 

//insert many comments
addManyComments = function(req,res){
    Comment.insertMany(req.body). 
    then(resault => { 
        if (resault) { 
            res.status(200).json({ 
                massage: 'many Comments Added Successfully', 
                resault: resault 
            }); 
        } else { 
            res.status(400).json({ 
                massage: 'Comments Add Failed' 
            }); 
        } 
    }). 
    catch(err => { 
        res.status(404).json({ 
            massage: err 
        }); 
    }); 
}
 
 //fetches all comments
getComments = function (req, res, next) { 
    Comment.find().then(resault => { 
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
 
//fetch a single comment
getOneComment = function(req, res, next) { 
    Comment.find({ _id: req.params.id }).then(resault => { 
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
 
//update a comment
updateComment = function (req, res, next) { 
    const newComment = { 
        commentText: req.body.commentText, 
        user_id: req.body.user_id,
        post_id: req.body.post_id
    } 
    Comment.updateOne({ _id: req.params.id }, { $set: newComment }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'Comment updated Successfully', 
                resault: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
//delete a comment
deleteComment = function (req, res, next) { 
    Comment.deleteOne({ _id: req.params.id }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'Comment deleted Successfully', 
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
    addComment: addComment, 
    addManyComments:addManyComments,
    getComments: getComments, 
    getOneComment: getOneComment, 
    updateComment: updateComment, 
    deleteComment: deleteComment
}