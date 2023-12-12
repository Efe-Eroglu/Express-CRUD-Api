import { useState } from "react"
import "./addEdit.css"
import axios from "axios"

const initialState = {
    name : "",
    email : "",
    country : "",
    contact : ""
}

const AddEdit = () => {

    const [data,setData] = useState(initialState)
    const {name,email,country,contact} = data

    const createUser = async (data) => {
        const res = await axios.post("http://localhost:5000/users/",data)

        if (res.status === 200){
            window.confirm(res.data)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !country || !contact){
            window.confirm("Please fill all the fields")
            return;
        }
        else {
            createUser(data) 
        }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setData({...data, [name] : value})
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter a name" onChange={handleInputChange} value={name}/>
            </div>
            
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter a email" onChange={handleInputChange} value={email}/>
            </div>
            
            <div className="input-wrapper">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country" placeholder="Enter a country" onChange={handleInputChange} value={country}/>
            </div>
            
            <div className="input-wrapper">
                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" name="contact" placeholder="Enter a contact" onChange={handleInputChange} value={contact}/>
            </div>

            <input type="submit" className="btn btn-success" value="Add" />
        </form>
    </>
  )
}

export default AddEdit