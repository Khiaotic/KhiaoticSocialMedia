///object destructing
const {Schema,model}= require('mongoose')

const Reaction = new Schema({
    text: {
        type: String,
required: true,
minlength:10,
maxlength: 150,
    },
 reactionBody: {
    type: String,
    required: true,
    maxlength: 280
 },

 username: {
    type: String,
    required: true
},

createdAt: {
    type: Date,
    default: Data.now,
},   

})