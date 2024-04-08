import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const { id } = useParams();
    const [paymentId, setPaymentID] = useState()
    const [customer, setCustomer] = useState()
    const [amount, setAmount] = useState()
    const [date, setDate] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3003/payment/getPayment/' + id)
            .then(result => {
                console.log(result)
                setPaymentID(result.data.paymentId)
                setCustomer(result.data.customer)
                setAmount(result.data.amount)
                setDate(result.data.date)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault()

        axios.patch('http://localhost:3003/payment/updatePayment/' + id, { paymentId, customer, amount, date})
            .then(result => {
                console.log(result)
                navigate('/invoice')
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
                <label htmlFor='paymentId' className='form-control'>Payment ID:</label>
                <input type='text' placeholder='Enter Payment ID' className='border p-2 rounded-lg ' id='paymentId' name='paymentId' 
                 value={paymentId}
                 onChange={(e) => setPaymentID(e.target.value)}
                />
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='customer' className='form-control'>Customer:</label>
                <input type='text' placeholder='Enter Customer Name' className='border p-2 rounded-lg ' id='customer' name='customer' 
                onChange={(e) => setCustomer(e.target.value)}
                value={customer}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='amount' className='form-control'>Amount:</label>
                <input type='text' placeholder='Enter Amount' className='border p-2 rounded-lg' id='amount' name='amount' 
                onChange={(e) => setAmount(e.target.value)}
                value={amount}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='date' className='form-control'>Date:</label>
                <input type='date' placeholder='Enter Date' className='border p-2 rounded-lg' id='date' name='date' 
                onChange={(e) => setDate(e.target.value)}
                value={date}/>
              </div>
              {/* <div className='flex gap-3 items-center'>
                <label htmlFor='email' className='form-control'>Email:</label>
                <input type='email' placeholder='Enter your email address' className='border p-2 rounded-lg' id='email' name='email' 
                onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}
            </div>
            <button type="submit" className="btn btn-primary me-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Save Changes</button>
            <Link to="/invoice" className="btn btn-outline-primary bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Cancel</Link>
          </form>
          </div>
          </div>
          </div>
    )
}

export default Update
