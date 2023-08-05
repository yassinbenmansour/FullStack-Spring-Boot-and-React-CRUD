import React, { useState , useEffect} from 'react'
import axios from 'axios';

export default function Home() {
        const [users,setUsers] = useState([]);
        useEffect(()=>{
                loadUsers();
        },[]);

        const loadUsers =async() => {
                const result = await axios.get("http://localhost:8080/users");
                setUsers(result.data);
        }

  return (
    <div>
        <div className="container">
                <div className="py-4">
                <table className="table shadow">
                        <thead>
                                <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>username</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                </tr>
                        </thead>
                        <tbody>
                                {
                                        users.map((user,index)=>(
                                                <tr>
                                                        <th key={index}>{index+1}</th>
                                                        <td>{user.name}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                                <button className='btn btn-primary mx-2'>View</button>
                                                                <button className='btn btn-outline-primary mx-2'>Edit</button>
                                                                <button className='btn btn-danger mx-2'>Delete</button>

                                                        </td>
                                                 </tr>
                                        ))
                                }
                       
   
                </tbody>
                </table>
                </div>
        </div>
    </div>
  )
}
