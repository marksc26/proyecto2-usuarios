const usersControllers = require("./users.controllers")

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })

}

const getUsersById = (req, res) =>{
    const id = Number(req.params.id)
    usersControllers.findUserById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json("User not found")
            }
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

const postNewUser = (req, res) => {
    userObj = req.body
    usersControllers.createNewUser(userObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
}

module.exports = {
    getAllUsers,
    getUsersById,
    postNewUser
}