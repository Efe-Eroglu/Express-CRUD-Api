import { v4 as uuid } from "uuid";

//Dummy data
let users = [
    {
        id: uuid(),
        name:"Efe",
        email:"efe@example.com",
        country:"Turkey",
        contact:"0061"
    },
    {
        id: uuid(),
        name:"sude",
        email:"sude@example.com",
        country:"Turkey",
        contact:"0034"
    },
    {
        id: uuid(),
        name:"melisa",
        email:"melisa@example.com",
        country:"Turkey",
        contact:"0035"
    },
    {
        id: uuid(),
        name:"anıl",
        email:"anıl@example.com",
        country:"Turkey",
        contact:"0053"
    },
    {
        id: uuid(),
        name:"yusuf",
        email:"yusuf@example.com",
        country:"Turkey",
        contact:"0012"
    }
];

export const getAllUsers = (req,res)=>{
    res.send(users);
}

export const getSingleUser = (req,res)=>{
    const id = req.params.id;
    const user = user.find((user)=> user.id ===(id));
    if(!user){
        res.status(400).send("Searched user is not found")
    }
    res.send(user);
}

export const deleteUser = (req,res) =>{
    const id = req.params.id;
    const user = users.find((user)=> user.id === id);
    users = users.find((user)=> user.id === id);
    if(!user){
        res.status(404).send("Searched user is not found");
    }
    res.send(users);
}

export const createUser = (req,res)=>{
    const {name, email, country, contact} = req.body;
    const user = {
        id: uuid(),
        name:name,
        email:email,
        country:country,
        contact:contact,
    };

    users.push(user);
    res.send("New user created");
};

export const updateUser = (req,res) => {
    const id = req.params.id;
    const user = users.find((user)=> user.id === id);
    const {name,email,country,contact} = req.body;

    if(!user){
        res.status(400).send("Searched user is not found");
    }

    user.name = name,
    user.email = email,
    user.country = country,
    user.contact = contact,

    res.send("Uptaded User");
}