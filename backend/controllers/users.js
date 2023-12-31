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
        name:"Sude",
        email:"sude@example.com",
        country:"Turkey",
        contact:"0034"
    },
    {
        id: uuid(),
        name:"Melisa",
        email:"melisa@example.com",
        country:"Turkey",
        contact:"0035"
    },
    {
      id: uuid(),
      name:"Frank",
      email:"frank@example.com",
      country:"France",
      contact:"00782"
  },
  {
    id: uuid(),
    name:"David",
    email:"david@example.com",
    country:"America",
    contact:"0097"
}
];
export const getAllUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.status(400).send("Searched User is not found!");
  }
  res.send(user);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };
  users.push(user);
  res.send("New user created!");
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  users = users.filter((u) => u.id !== id);
  if (!user) {
    res.status(400).send("Searched User is not found!");
  }
  res.send(users);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  const { name, email, country, contact } = req.body;
  if (!user) {
    res.status(400).send("Searched User is not found!");
  }
  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;
  res.send("Updated User");
};
