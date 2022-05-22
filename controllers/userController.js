const User = require('../models/user'); 
 
 
addUser = function (req, res, next) { 
    const user = new User({ 
        name: req.body.name, 
        email: req.body.email, 
        address: req.body.address, 
        imageLink: req.body.imageLink,
        posts:req.body.posts 

    }); 
    user.save(). 
        then(resault => { 
            if (resault) { 
                res.status(200).json({ 
                    massage: 'user Added Successfully', 
                    resault: resault 
                }); 
            } else { 
                res.status(400).json({ 
                    massage: 'user Add Failed' 
                }); 
            } 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
getUsers = function (req, res, next) { 
    User.find().then(resault => { 
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
 
getOneUser = function(req, res, next) { 
    User.find({ _id: req.params.id }).then(resault => { 
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
 
updateUser = function (req, res, next) { 
    const newUser = { 
        name: req.body.name, 
        email: req.body.email, 
        address: req.body.address, 
        imageLink: req.body.imageLink ,
        posts:req.body.posts
    } 
    User.updateOne({ _id: req.params.id }, { $set: newUser }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'user updated Successfully', 
                resault: resault 
            }); 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
deleteUser = function (req, res, next) { 
    User.deleteOne({ _id: req.params.id }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'User deleted Successfully', 
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
    addUser: addUser, 
    getUsers: getUsers, 
    getOneUser: getOneUser, 
    updateUser: updateUser, 
    deleteUser: deleteUser 
}