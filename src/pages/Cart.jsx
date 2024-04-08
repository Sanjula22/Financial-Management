import React, { useState } from "react";

function Items () {
  const [Items, setItems] = useState([{
    Id: "001", Product: "Tail Light", Price: "Rs25,000", Quentity: 2, SubTotal: "50,000"
  }])
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
                    <th>Id</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quentity</th>
                    <th>SubTotal</th>
                </tr>
            </thead>
            <tbody>
                {
                    Items.map((Items) => {
                        return (
                            <tr key={Items.Id}>
                                <td>{Items.Id}</td>
                                <td>{Items.Product}</td>
                                <td>{Items.Price}</td>
                                <td>{Items.Quentity}</td>
                                <td>{Items.SubTotal}</td>
                                <td className='d-flex'>
                                    {/* <Link to={`/update/${user._id}`} className="btn btn-warning me-2">Edit</Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={(e) => handleDelete(user._id)}
                                    >
                                        Delete
                                    </button> */}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        </div>
        <div className='flex gap-4 my-2'>
          <a
            href="http://localhost:5173/checkout"
            className='bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
            >
            Checkout
          </a>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Items;
