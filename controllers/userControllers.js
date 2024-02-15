const {User, Thought} = require("../models") 

module.exports = {
    // Get All Users
    async getUsers (req,res) {
        try {
            const users = await User.find();

            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

    //  Get User by ID -> findOne
    async getUserById (req,res) {
        try {
            const user = await User.findById(req.params.userId);    //.populate?

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Create new user -> create
    async newUser (req,res) {
        try {
            const newUser = await User.create(req.body);  //post or create??

            res.json(newUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },



    // Update user by ID -> findOneAndUpdate
    async updateUser (req,res) {
        try {
            const users = await User.findByIdAndUpdate(req.params.userId, req.body);
            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete User by ID -> findOneAndRemove
   
    async deleteUser (req,res) {
        try {
            const users = await User.findByIdAndDelete(req.params.userId);
            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Add Friend -> findOneAndUpdate           create?
    async addFriend (req,res) {
        try {
            const users = await User.findByIdAndUpdate(req.params.userId, {
                $addToSet:{
                    friends: req.body.friendId
                }
            });
            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete Friend -> findOneAndremove
    async deleteFriend (req,res) {
        try {
            const users = await User.findByIdAndUpdate(req.params.userId, {
                $pull:{
                    friends:req.body.friendId
                }
            });
            res.json(users)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },
}
    