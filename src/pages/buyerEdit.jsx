import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const { id } = useParams();
    const [fName, setFName] = useState()
    const [lName, setLName] = useState()
    const [nic, setNIC] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3003/checkout/getCheckout/' + id)
            .then(result => {
                console.log(result)
                setFName(result.data.fName)
                setLName(result.data.lName)
                setNIC(result.data.nic)
                setPhone(result.data.phone)
                setEmail(result.data.email)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault()

        axios.patch('http://localhost:3003/checkout/updateCheckout/' + id, { fName, lName, nic, phone, email})
            .then(result => {
                console.log(result)
                navigate('/buyer')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='max-h-screen flex items-center justify-center bg-gray-0'>
        <div className='min-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
        {/* <h1 className='text-3xl text-center font-semibold my-7 bg-blue-300 p-8 mb-4 rounded-lg'>Checkout</h1> */}
        <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
 
        <form onSubmit={update} className='flex flex-col gap-5 bg-blue-100 p-8 mb-4 rounded-lg w-full md:w-1/2'>
            <div className='flex flex-col gap-3'>
            <h1 className='text-2xl text-center font-semibold my-0 p-0 mb-0'>Payment Edit</h1>

              <div className='flex gap-3 items-center'>
                <label htmlFor='fName' className='form-control'>First Name:</label>
                <input type='text' placeholder='Enter First Name' className='border p-2 rounded-lg ' id='fName' name='fName' 
                 onChange={(e) => setFName(e.target.value)}
                 value={fName}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='lName' className='form-control'>Last Name:</label>
                <input type='text' placeholder='Enter Last Name' className='border p-2 rounded-lg ' id='lName' name='lName' 
                onChange={(e) => setLName(e.target.value)}
                value={lName}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='nic' className='form-control'>NIC:</label>
                <input type='text' placeholder='Enter NIC' className='border p-2 rounded-lg' id='nic' name='nic' 
                onChange={(e) => setNIC(e.target.value)}
                value={nic}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='phone' className='form-control'>Phone:</label>
                <input type='text' placeholder='Enter Date' className='border p-2 rounded-lg' id='phone' name='phone' 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='email' className='form-control'>Email:</label>
                <input type='email' placeholder='Enter your email address' className='border p-2 rounded-lg' id='email' name='email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Save Changes</button>
            <Link to="/buyer" className="btn btn-outline-primary bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Cancel</Link>
          </form>
          </div>
          </div>
          </div>
    )
}

export default Update