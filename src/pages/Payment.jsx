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
    <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: "url(/Lambogini.jpg)"}}>
      <h1 className="text-4xl p-4">
        <span className="text-yellow-600 font-semibold">Payment</span>
        <span className="text-white font-semibold">Page</span>
      </h1>
      <h1 className="text-xl text-white px-8 font-semibold italic">Securety compleate your payment</h1>
    <div className='min-h-screen flex items-center justify-center bg-gray-0'>
      <div className='max-w-full p-10 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
          
        <form onSubmit={Submit} className='flex flex-col gap-5 bg-gray-500 p-8 mb-4 rounded-lg w-full md:w-3/4 lg:w-2/3'>
  <div className='flex flex-col gap-5'>
    <div className="flex justify-center">
      <h1 className="text-4xl">
        <span className="text-yellow-600 font-semibold">Payment</span>
        <span className="text-white font-semibold">Details</span>
      </h1>
    </div>
    <div className='flex gap-5 items-center'>
      <label htmlFor='paymentId' className='text-lg'>Payment ID:</label>
      <input type='text' className='border p-3 rounded-lg bg-gray-400 text-lg' id='paymentId' name='paymentId' 
        onChange={(e) => setPaymentID(e.target.value)}/>
    </div>
    <div className='flex gap-5 items-center'>
      <label htmlFor='customer' className='text-lg'>Customer:</label>
      <input type='text' className='border p-3 rounded-lg bg-gray-400 text-lg' id='customer' name='customer' 
        onChange={(e) => setCustomer(e.target.value)}/>
    </div>
    <div className='flex gap-5 items-center'>
      <label htmlFor='amount' className='text-lg'>Amount:</label>
      <input type='text' className='border p-3 rounded-lg bg-gray-400 text-lg' id='amount' name='amount' 
        onChange={(e) => setAmount(e.target.value)}/>
    </div>
    <div className='flex gap-5 items-center'>
      <label htmlFor='date' className='text-lg'>Date:</label>
      <input type='date' className='border p-3 rounded-lg bg-gray-400 text-lg' id='date' name='date' 
        onChange={(e) => setDate(e.target.value)}/>
    </div>

    <div className='flex flex-col gap-5'>
      <p className="text-lg">Upload Payment Slip:</p>
      <div className='flex gap-5 items-center'>
        <label htmlFor='file' className='text-lg'></label>
        <input type='file' className='border p-3 rounded-lg' id='file' name='file' />
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-success bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-lg">Submit</button>
</form>


<form className='bg-gray-500 p-8 rounded-lg w-full md:w-3/4 lg:w-2/3'>
  <div className="flex justify-center mb-6">
    <h1 className="text-4xl">
      <span className="text-yellow-600 font-semibold">Order</span>
      <span className="text-white font-semibold">Details</span>
    </h1>
  </div>
  <table className='w-full text-left'>
    <thead>
      <tr>
        <th className='pr-8 pb-2'>Subtotal</th>
        <td className='font-semibold pb-2'>50,000</td>              
      </tr>
      <tr>
        <th className='pr-8 pb-2'>Service Charge</th> 
        <td className='font-semibold pb-2'>5,000</td>            
      </tr>
      <tr>
        <th className='pr-8 pb-2'>Discount</th> 
        <td className='font-semibold pb-2'>500</td>             
      </tr>
      <tr>
        <th className='pr-8 pb-2'>Tax</th> 
        <td className='font-semibold pb-2'>50</td>             
      </tr>
      <tr>
        <td colSpan="2"><hr className="my-4 border-gray-400"></hr></td>
      </tr>
      <tr>
        <th className='pr-8 pt-2'>Total</th>
        <td className='font-semibold pt-2'>54,550</td>
      </tr>
    </thead>  
  </table>
</form>

        </div>
      </div>
    </div>
    </div>
  );
};
