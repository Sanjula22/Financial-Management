import React, { useState } from "react";
import axios from 'axios'

export default function Checkout() {
  const [fName, setFName] = useState()
  const [lName, setLName] = useState()
  const [nic, setNIC] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  const Submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3003/checkout/createCheckout", {fName,lName, nic, phone, email})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-0'>
      <div className='max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
        {/* <h1 className='text-3xl text-center font-semibold my-7 bg-blue-300 p-8 mb-4 rounded-lg'>Checkout</h1> */}
        <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
          
          <form onSubmit={Submit} className='flex flex-col gap-5 bg-blue-100 p-8 mb-4 rounded-lg w-full md:w-1/2'>
            <div className='flex flex-col gap-3'>
            <h1 className='text-2xl text-center font-semibold my-0 p-0 mb-0'>Purchase Details</h1>

              <div className='flex gap-3 items-center'>
                <label htmlFor='firstname' className=''>First_Name:</label>
                <input type='text' placeholder='Enter your first name' className='border p-2 rounded-lg ' id='firstname' name='firstname' 
                onChange={(e) => setFName(e.target.value)}
                // value={fName}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='lastname' className=''>Last_Name:</label>
                <input type='text' placeholder='Enter your last name' className='border p-2 rounded-lg ' id='lastname' name='lastname' 
                onChange={(e) => setLName(e.target.value)}
                // value={lName}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='nic' className=''>NIC:</label>
                <input type='text' placeholder='Enter your NIC' className='border p-2 rounded-lg' id='nic' name='nic' 
                onChange={(e) => setNIC(e.target.value)}
                // value={nic}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='phone' className=''>Phone:</label>
                <input type='tel' placeholder='Enter your phone number' className='border p-2 rounded-lg' id='phone' name='phone' 
                onChange={(e) => setPhone(e.target.value)}
                // value={phone}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='email' className=''>Email:</label>
                <input type='email' placeholder='Enter your email address' className='border p-2 rounded-lg' id='email' name='email' 
                onChange={(e) => setEmail(e.target.value)}
                // value={email}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
          </form>

          <form className='bg-blue-100 p-5 rounded-lg w-full md:w-1/2'>
            <h1 className='text-2xl text-center font-semibold my-0 p-0 mb-0'>Order Summary</h1>
            <table className='w-full text-left'>
              <thead>
                <tr>
                  <th className=''>Subtotal</th>              
                </tr>
                <tr>
                  <th className=''>Service_charge</th>             
                </tr>
                <tr>
                  <th className=''>Discount</th>              
                </tr>
                <tr>
                  <th className=''>Tax</th>              
                </tr>
                <hr className="flex my-2 border-gray-400 w-full"></hr>
                <tr>
                  <th className=''>Total</th>
             
                </tr>
              </thead>  
            </table>
            <div className='flex gap-4 my-2'>
            {/* <button type="submit" className="btn btn-success bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Place Order</button>
            <button type="submit" className="btn btn-success bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Back to Home</button> */}
              {/* <a
                href="http://localhost:5173/payment"
                className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:ring focus:border-blue-300'
              >
                Place order
              </a>
              <a
                href="http://localhost:5173"
                className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              >
                Back to shopping
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
