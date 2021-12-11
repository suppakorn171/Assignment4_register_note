const mongoose = require('mongoose');

//const {WEB_APP_NOTES_MONGODB_HOST,WEB_APP_NOTES_MONGODB_DATABASE} = process.env;
const MONGODB_CONNECTION = "mongodb+srv://assign4:assign4@cluster0.w5rwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true
})
    .then(db => console.log('DB Connection: true'))
    .catch(err => console.log(err))