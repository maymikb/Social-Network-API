const {Schema, model} = require("mongoose");
const dayjs = require("dayjs")

const reactionSchema = require("./Reaction")

//create schema
const thoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLenght: 280
    },

    createdAt: {
        type: Date,
        default: Date.now, //123123121242
        get: function(date) {
            return dayjs(date).format("MM/DD/YYYY")
        } 
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true
    }
})

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
})

const Thought = model("Thought", thoughtSchema)

module.exports = Thought;
