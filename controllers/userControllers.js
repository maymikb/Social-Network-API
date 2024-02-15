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
    async userByID (req,res) {
        try {
            const users = await userByid.find();

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Create new user -> create
    async newUser (req,res) {
        try {
            const users = create newUser.post(),  //post?

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },




    // Update user by ID -> findOneAndUpdate
    async userByID (req,res) {
        try {
            const users = await userByid.find();

            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },





    // Delete User by ID -> findOneAndRemove
   
    async deleteByID (req,res) {
        try {
            const users = delete userByid.find();

            res.json(userById)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },




    // Add Friend -> findOneAndUpdate           create?
    async addFriend (req,res) {
        try {
            const users = add newFriend.add();

            res.json(addFriend)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },


    // Delete Friend -> findOneAndUpdate
    async deleteFriend (req,res) {
        try {
            const users = delete friend.delete();

            res.json(friend)
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

