import React, { useState } from "react";

function Items() {
  const [items, setItems] = useState([
    {
      Id: "001",
      Product: "Tail Light",
      Price: "Rs25,000",
      Quantity: 2,
      SubTotal: "50,000"
    }
  ]);

  return (
    <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: "url(/Lambogini.jpg)"}}>
      <h1 className="text-4xl p-4">
        <span className="text-yellow-600 font-semibold">Cart</span>
        <span className="text-white font-semibold">Page</span>
      </h1>
      <h1 className="text-xl text-white px-8 font-semibold italic">Review items before checkout</h1>

      <div className='max-h-screen p-10 flex justify-center bg-gray-0'>
        
        <div className='min-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
            <form className='sm:flex-row  flex-col gap-5 bg-gray-500 p-8 mb-4 rounded-lg w-full md:w-1/2'>
              <div className='flex flex-col gap-3'>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-yellow-600 text-xl">Id</th>
                      <th className="text-yellow-600 text-xl">Product</th>
                      <th className="text-yellow-600 text-xl">Price</th>
                      <th className="text-yellow-600 text-xl">Quantity</th>
                      <th className="text-yellow-600 text-xl">SubTotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.Id}>
                        <td>{item.Id}</td>
                        <td>{item.Product}</td>
                        <td>{item.Price}</td>
                        <td>{item.Quantity}</td>
                        <td>{item.SubTotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex gap-4 my-2 justify-center'>
                <a
                  href="http://localhost:5173/checkout"
                  className='bg-yellow-600 text-black py-1 px-3 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring focus:border-blue-300 font-semibold'
                >
                  Checkout
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
