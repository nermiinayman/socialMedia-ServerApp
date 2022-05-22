const mongoose = require('mongoose'); 
const userSettings = mongoose.Schema({ 
    theme: { 
        type: String, 
        required: true 
    },   
    activeStatus: { 
        type: Boolean,
        required:true
    } ,
    mobileNumber:{
        type: Number
    },
    user_id:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }]
    
}); 
 
module.exports = mongoose.model('UserSettings', userSettings);