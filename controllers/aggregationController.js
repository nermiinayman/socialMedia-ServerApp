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


 addField = async (req, res) => {
    const aggPost = await Aggregation.aggregate([
        {
        $addFields: {
            totalPost: { $sum: "$Posts" },
        },
        }
    ]);
    res.status(200).json({  aggPost });
};


 group = async (req, res) => {
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

 unwind = async (req, res) => {
    const aggPost = await Aggregation.aggregate( [ { $unwind : "$Posts" } ] )
    res.status(200).json({  aggPost });
};

 match = async (req, res) => {
    const aggPost = await Aggregation.aggregate([ 
        { 
            $match : { Posts : { $lt: 10} } 
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