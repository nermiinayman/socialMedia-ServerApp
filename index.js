require('dotenv').config();
const bodyParser = require("body-parser")

const express = require('express');
const app = express();
const cors = require('cors');
  
//connect to Database
const connectDB = require('./db/connect');

//routers
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');
const userSettingsRouter = require('./routes/userSettings');
var aggregationRouter = require('./routes/aggregation');


// error handler
// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/userSettings', userSettingsRouter);
app.use('/aggregation', aggregationRouter);


// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();