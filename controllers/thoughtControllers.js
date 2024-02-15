const {User, Thought} = require("../models")

module.exports = {
    // Get All Thoughts
    async getUsers (req,res) {
        try {
            const users = await Thought.find();

            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

    //  Get Thoughts by ID -> findOne
    async getUserByID (req,res) {
        try {
            const user = await Thought.findByid.get(req.params.thoughtID);  

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },



    // Update Thoughts by ID -> findOneAndUpdate
    async UpdateUserByID (req,res) {
        try {
            const users = await Thought.findByIdAndUpdate((req.params.thoughtID, req.body)); 
        res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete Thoughts by ID -> findOneAndRemove
   
    async deleteByID (req,res) {
        try {
            const users = delete userById.findByIdAndRemove(reqs.params.thoughtID); 

            res.json(deleteById)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Add a Thought ->create/post           create?
    async createThought (req,res) {
        try {
            const users = await Thought.create.post({thoughtText,username, user: userdId});   //user. ??
                    //push thought?
            res.json(createThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete Thought -> findOneAndRemove
    async deleteThought (req,res) {
        try {
            const users = await Thought.findByIdAndDelete(req.params.thoughtID);
            res.json(friend)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

   


//Add a Reaction
async addReaction (req,res) {
    try {
        const users = await Thought.findById(req.params.thoughtId); //Thought capitalized?
        Thought.reactions.push(req.body); //??
        await Thought.save //??
        res.json(createReaction)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
},



//Remove reaction
async removeReaction (req,res) {
    try {
        const users = await Thought.findById(req.params.thoughtId); //Thought capitalized?
        
        res.json(removeReaction)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
},

}