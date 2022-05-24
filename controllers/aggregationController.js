const Aggregation = require('../models/aggregation');


addAggregation = function (req, res, next) {
    const aggr = new Aggregation({
        aggregation: req.body.aggregation,
        Posts: req.body.Posts,
    });
    aggr.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'aggregation Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'aggregation Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

//ADD FIELD Stage 
//Asynchronous code allows the program to be executed immediately
 addField = async (req, res,next) => {
     //to wait for a Promise . It can only be used inside an async function within
    const aggPost = await Aggregation.aggregate([
        {
        $addFields: {
            totalPost: { $sum: "$Posts" },
        },
        }
    ]);
    res.status(200).json({  aggPost });
};

//GROUP Stage
 group = async (req, res,next) => {
    const aggPost = await Aggregation.aggregate( [
        {
          $group: {
             _id: null,
             count: { $sum: 1 }
          }
        }
    ])
    res.status(200).json({  aggPost });
};


//UNWIND Stage
 unwind = async (req, res,next) => {
    const aggPost = await Aggregation.aggregate( [ { $unwind : "$Posts" } ] )
    res.status(200).json({  aggPost });
};


//MATCH Stage
 match = async (req, res) => {
    const aggPost = await Aggregation.aggregate([ 
        { 
            $match : { Posts : { $lt: 15} } 
        }
    ])
    res.status(200).json({  aggPost });
};

module.exports = {
    addAggregation: addAggregation,
    addField:addField,
    group:group,
    unwind:unwind,
    match:match
}