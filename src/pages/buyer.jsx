import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Items = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/checkout')
        .then(result => setItems(result.data))
        .catch(err => console.log(err))
}, [])

const handleDelete = (id) => {
  axios.delete('http://localhost:3003/checkout/deleteCheckout/' + id)
      .then(res => {
          console.log(res);
          window.location.reload()
      })
      .catch(err => console.log(err))
}
  
  return (
    <div className='max-h-screen flex justify-center bg-gray-0'>
      <div className='min-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
          <form className='flex flex-col gap-5 bg-blue-100 p-8 mb-4 rounded-lg w-full md:w-1/2'>
            <div className='flex flex-col gap-3'>
        {/* <div className='d-flex justify-content-between mb-2'>
            <h3>All Users</h3>
            <Link to="/create" className="btn btn-primary">+ Add Users</Link>
        </div> */}
        <table className="table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>NIC</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    Items.map((Items) => {
                        return (
                            <tr key={Items._id}>
                                <td>{Items.fName}</td>
                                <td>{Items.lName}</td>
                                <td>{Items.nic}</td>
                                <td>{Items.phone}</td>
                                <td>{Items.email}</td>
                                <td className='d-flex'>
                                    <Link to={`/buyerEdit/${Items._id}`} className="btn btn-warning me-2 bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-blue-300">Edit</Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300"
                                        onClick={(e) => handleDelete(Items._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                <div className='flex gap-4 my-2'>
          <a
            href="http://localhost:5173"
            className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
            >
            Back to Home
          </a>
        </div>
            </tbody>
        </table>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Items;
