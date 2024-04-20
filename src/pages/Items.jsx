import React from 'react';
import { FaSearch } from 'react-icons/fa';

function ItemsPage() {
  return (
    <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: "url(/Lambogini.jpg)"}}>

      <h1 className="text-4xl p-4">
        <span className="text-yellow-600 font-semibold">Spare</span>
        <span className="text-white font-semibold">Parts</span>
      </h1>
      <h1 className="text-xl text-white px-8 font-semibold italic">Components available for purchase</h1>

      <div className='flex justify-center items-center max-w-6xl mx-auto p-5'>
      <form className='bg-gray-700 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder="Serch SpareParts..." className='bg-transparent focus:outline-none w-80 sm:64 font-semibold italic '/>
        <FaSearch className='text-slatec-600 text-gray-400' />
      </form>    
      </div>
      <main className="container mx-auto py-10 px-10">        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Item Card 1 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="h-40 w-40 object-cover object-center" src="/Tyre.png" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Tyre</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.18,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 2 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wheel.png" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Wheel</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.15,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 3 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Break_Pad.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Break Pad</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.6,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 4 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Radiator_Fan.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Radiator Fan</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.12,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 5 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Radiator.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Radiator</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.16,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 6 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Tail_Light.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Tail Light</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.25,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 7 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Side_Mirror.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Side Mirror</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.13,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>
          
          {/* Item Card 8 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Front_Bumper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Front Bumper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.28,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 10 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 11 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 12 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 13 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 14 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 15 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 16 */}
          <div className="bg-gray-500 rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
    
  );
}

export default ItemsPage;
