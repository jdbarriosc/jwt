mongoose = require('mongoose');

const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/jwt';

mongoose.set('useFindAndModify', false);

const closeDB = async () => mongoose.connection.close();

const connectDB = async () => {
    await mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
};

const mongo = { closeDB, connectDB };

module.exports = mongo;
