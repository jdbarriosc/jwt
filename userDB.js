mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin','premium-user','free-user'],
        required: true,
    },},
{
    collection: 'users',
    timestamps: true,
});

const userDB = mongoose.model('User', userSchema);

module.exports = userDB;
