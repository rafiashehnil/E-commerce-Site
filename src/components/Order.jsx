import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Order = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <section className="max-w-7xl mx-auto pt-16 px-6 md:pt-20 md:px-10 lg:pt-24 lg:px-16">
      <form className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
          <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none col-span-1 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none col-span-1 sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Zip code"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Delivery Address"
              className="ring-1 ring-slate-900/15 p-2 rounded-sm outline-none col-span-1 sm:col-span-2"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 lg:pl-6">
          <h4 className="font-bold mb-4">Summary</h4>
          <div className="flex justify-between py-3">
            <h4 className="medium-16">Subtotal:</h4>
            <h4 className="text-gray-700 font-semibold">Tk{getTotalCartAmount()}</h4>
          </div>
          <hr />
          <div className="flex justify-between py-3">
            <h4 className="medium-16">Shipping Fee:</h4>
            <h4 className="text-gray-700 font-semibold">
              Tk{getTotalCartAmount() === 0 ? 0 : 70}
            </h4>
          </div>
          <hr />
          <div className="flex justify-between py-3">
            <h4 className="bold-18 font-bold">Total:</h4>
            <h4 className="bold-18 font-bold">
              Tk{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 70}
            </h4>
          </div>
          <button className="bg-orange-500 w-full max-w-[220px] rounded mt-6 py-2 text-white hover:bg-orange-600">
            Proceed to Payment
          </button>
        </div>
      </form>
      <div className="pb-20" />
    </section>
  );
};

export default Order;

