const {Schema, Types} = require("mongoose");

// Create a Schema
const reactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
       // minLength: 1,
        maxLength: 280
    },
    
    username: {
        type: String,
        required: true,
    },
   
    createdAt: {
        type: Date,
        default: Date.now, //123123121242
        get: function(date) {
            return dayjs(date).format("MM/DD/YYYY")
        } 
    }
}, {
    
    toJSON: {
        virtuals: true
    }
})




module.exports = reactionSchema;
