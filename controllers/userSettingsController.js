const UserSettings = require('../models/userSettings'); 
 
 
add_userSettings = function (req, res, next) { 
    const userSettings = new UserSettings({ 
        user_id: req.body.user_id,
        theme: req.body.theme,
        activeStatus:req.body.activeStatus,
        mobileNumber:req.body.mobileNumber 
    }); 
    userSettings.save(). 
        then(resault => { 
            if (resault) { 
                res.status(200).json({ 
                    massage: 'userSettings Added Successfully', 
                    resault: resault 
                }); 
            } else { 
                res.status(400).json({ 
                    massage: 'userSettings Add Failed' 
                }); 
            } 
        }). 
        catch(err => { 
            res.status(404).json({ 
                massage: err 
            }); 
        }); 
} 
 
get_userSettings = function (req, res, next) { 
    UserSettings.find().then(resault => { 
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
 
 
update_userSettings = function (req, res, next) { 
    const newUserSettings = { 
        user_id: req.body.user_id,
        theme: req.body.theme,
        activeStatus:req.body.activeStatus,
        mobileNumber:req.body.mobileNumber 
    } 
    UserSettings.updateOne({ _id: req.params.id }, { $set: newUserSettings }). 
        then(resault => { 
            res.status(200).json({ 
                massage: 'userSettings updated Successfully', 
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
    add_userSettings: add_userSettings, 
    get_userSettings: get_userSettings, 
    update_userSettings: update_userSettings
}