const { User, Thought } = require("../models")

module.exports = {
    // Get All Thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();

            res.json(thoughts)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

    //  Get Thoughts by ID -> findOne
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);

            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },



    // Update Thoughts by ID -> findOneAndUpdate
    async updateUserById(req, res) {
        try {
            // const thought = await Thought.findByIdAndUpdate((req.params.thoughtId, req.body));
            // res.json(thought)

            const thought = await Thought.findById(req.params.thoughtId); //Thought capitalized?
            thought.thoughtText = req.body.thoughtText; //??
            await thought.save() //??

            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Add a Thought ->create/post           create?
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);   //user. ??

            const user = await User.findOne({
                username: req.body.username
            }); //Thought capitalized?

            user.thoughts.push(thought._id); //??
            await user.save() //??
            //push thought?
            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete Thought -> findOneAndRemove
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },




    //Add a Reaction
    async addReaction(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId); //Thought capitalized?
            thought.reactions.push(req.body); //??
            await thought.save() //??

            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },



    //Remove reaction
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId); //Thought capitalized?
            thought.reactions.pull(req.body); //??
            await thought.save() //??

            res.json(thought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

}