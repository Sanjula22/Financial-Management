import React from 'react';

function ItemsPage() {
  return (
      <div className="bg-gray-400">
      <h1 className="text-xl font-semibold">Spare Parts</h1>
      <main className="container mx-auto py-6">        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Item Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="h-40 w-40 object-cover object-center" src="/Tyre.png" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Tyre</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.18,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wheel.png" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Wheel</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.15,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Break_Pad.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Break Pad</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.6,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Radiator_Fan.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Radiator Fan</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.12,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Radiator.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Radiator</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.16,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Tail_Light.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Tail Light</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.25,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Side_Mirror.jpg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Side Mirror</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.13,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
          
          {/* Item Card 8 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-50 h-40 object-cover object-center" src="/Front_Bumper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Front Bumper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.28,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Item Card 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="flex justify-center py-5">
            <img className="w-40 h-40 object-cover object-center" src="/Wiper.jpeg" alt="Item Image" />
          </div>
            <div className="p-4 bg-gray-200">
              <h2 className="text-xl font-semibold mb-2">Windshield Wiper</h2>
              <p className="text-gray-700">Description</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-600">Rs.2,000.00</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ItemsPage;
