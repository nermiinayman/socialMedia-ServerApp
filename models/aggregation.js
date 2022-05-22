const mongoose = require('mongoose');

const AggregationSchema = new mongoose.Schema(
    {
        aggregation: {
            type: String,
            required: [true, 'Please provide aggregation'],
        },
        Posts:[],
        
    },
   
);

module.exports = mongoose.model('Aggregation', AggregationSchema);