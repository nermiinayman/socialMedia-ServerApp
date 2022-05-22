const mongoose = require('mongoose'); 
const comment = mongoose.Schema({ 
    commentText: { 
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
    post_id:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Post', 
        required: true 
    }]
    
}); 
 
module.exports = mongoose.model('Comment', comment);