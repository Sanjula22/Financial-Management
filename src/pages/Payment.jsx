import React, { useState } from "react";
import axios from 'axios'

export default function Payment() {
  const [paymentId, setPaymentID] = useState()
  const [customer, setCustomer] = useState()
  const [amount, setAmount] = useState()
  const [date, setDate] = useState()

  const Submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3003/payment/createPayment", {paymentId,customer, amount, date})
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
            <h1 className='text-2xl text-center font-semibold my-0 p-0 mb-0'>Payment Details</h1>
            
            <div className='flex gap-3 items-center'>
                <label htmlFor='paymentId' className=''>Payment ID:</label>
                <input type='text' className='border p-2 rounded-lg ' id='paymentId' name='paymentId' 
                onChange={(e) => setPaymentID(e.target.value)}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='customer' className=''>Customer:</label>
                <input type='text' className='border p-2 rounded-lg ' id='customer' name='customer' 
                onChange={(e) => setCustomer(e.target.value)}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='amount' className=''>Amount:</label>
                <input type='text' className='border p-2 rounded-lg' id='amount' name='amount' 
                onChange={(e) => setAmount(e.target.value)}/>
              </div>
              <div className='flex gap-3 items-center'>
                <label htmlFor='date' className=''>Date:</label>
                <input type='date' className='border p-2 rounded-lg' id='date' name='date' 
                onChange={(e) => setDate(e.target.value)}/>
              </div>
              {/* <div className='flex gap-3 items-center'>
                <label htmlFor='date' className=''>Date:</label>
                <input type='text' className='border p-2 rounded-lg' id='date' name='date' 
                onChange={(e) => setDate(e.target.value)}/>
              </div> */}
              <div className='flex flex-col gap-3'>
              {/* <p>Payment method</p>
              <div className='flex gap-2 items-center'>
                <input type='radio' id="cash" className='h-5' />
                <label htmlFor='cash' className='ml-2'>Cash</label>
              </div> */}
              {/* <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                  <input type='radio' id="online" className='h-5' />
                  <label htmlFor='online' className='ml-2'>Online</label>
                </div>
                
              </div> */}
            </div>
              <p>Uploard Payment Slip:</p>
              <div className='flex gap-3 items-center'>
                <label htmlFor='file' className=''></label>
                <input type='file' className='border p-2 rounded-lg' id='file' name='file' />
              </div>
            </div>
            {/* <div className='flex gap-4 my-2'>
              <a
                  href="http://localhost:5173/invoice"
                  className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
                >
                  Submit
              </a>
            </div> */}
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
          </form>
        </div>
      </div>
    </div>
  );
};
