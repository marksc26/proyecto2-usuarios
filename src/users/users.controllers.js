const usersDB = [
    {
       id :1,
       firstName: "Marcos",
       lastName: "Sigala",
       email: "marcos.s@academlo.com",
       password: "root",
       age: 30
    },
    {
        id :2,
        firstName: "Carlos",
        lastName: "De la Torre",
        email: "carlos.t@academlo.com",
        password: "root",
        age: 29
     },  
     {
        id :3,
        firstName: "Andrea",
        lastName: "Fernández",
        email: "marcos.s@academlo.com",
        password: "root",
        age: 23
     }
]

let baseId = 4

const findAllUsers = async() => {
    return await usersDB
}

const findUserById = async(id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createNewUser = async (userObj) => {
    const newUser = {
        id : baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age

    }

    await usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}