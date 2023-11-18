import { v4 as uuid } from "uuid";

//Dummy data
let users = [
    {
        id: 1,
        name:"Efe",
        email:"efe@example.com",
        country:"Turkey",
        contact:"0061"
    },
    {
        id: 2,
        name:"sude",
        email:"sude@example.com",
        country:"Turkey",
        contact:"0034"
    },
    {
        id: 3,
        name:"melisa",
        email:"melisa@example.com",
        country:"Turkey",
        contact:"0035"
    },
    {
        id: 4,
        name:"anıl",
        email:"anıl@example.com",
        country:"Turkey",
        contact:"0053"
    },
    {
        id: 5,
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