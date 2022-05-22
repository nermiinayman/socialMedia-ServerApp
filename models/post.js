const mongoose = require('mongoose'); 
const post = mongoose.Schema({ 
    imageLink: { 
        type: String, 
        required: true 
    }, 
    desc: { 
        type: String, 
        required: true 
    }, 
    location: { 
        type: String, 
        required: true 
    }, 
    date: { 
        type: Date, default: Date.now 

    } ,
    user_id:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }],
    comment_id:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment', 
        required: true 
    }]
    
}); 
 
module.exports = mongoose.model('Post', post);