var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//use moment

var User = require('./user')

var schema = new Schema({
    title: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // comments: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Comment'
    // }],
});


// schema.post('remove', (message) => {
//     User.findById(message.user, (err, user) => {
//         user.messages.pull(message)
//         user.save();
//     });
// });


module.exports = mongoose.model('Profile', schema);
