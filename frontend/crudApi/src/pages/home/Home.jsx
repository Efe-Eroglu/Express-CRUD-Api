import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");

    if (res.status === 200) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user,index) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>{user.contact}</td>
                <td>
                  <div className="buttons">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
