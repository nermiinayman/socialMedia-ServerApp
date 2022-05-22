const mongoose = require('mongoose'); 
const comment = require('./comment');
const user = mongoose.Schema({ 
    name: { 
        type: String, 
        required: true 
    }, 
    email: { 
        type: String, 
        required: true 
    }, 
    address: { 
        type: String, 
        required: true 
    }, 
    imageLink: { 
        type: String

    }, 
    posts:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true 
    }],
    comments:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment', 
        required: true 
    }],
    uesrSettings:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserSettings', 
        required: true 
    }]
    
}); 
 
module.exports = mongoose.model('User', user);