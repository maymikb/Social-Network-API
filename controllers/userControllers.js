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


    // Create new user -> create



    // Update user by ID -> findOneAndUpdate



    // Delete User by ID -> findOneAndRemove



    // Add Friend -> findOneAndUpdate


    // Delete Friend -> findOneAndUpdate
}