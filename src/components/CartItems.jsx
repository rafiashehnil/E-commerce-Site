import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const CartItems = () => {

  const navigate = useNavigate();
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <section className="max-padd-container pt-20 px-4 md:px-8 lg:px-16">
      <div className="py-10 overflow-x-auto w-full">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-slate-900/20 text-gray-700 text-start">
              <th className="p-2 text-left">Products</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left">Total</th>
              <th className="p-2 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {all_products.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr
                    key={e.id}
                    className="border-b border-slate-900/20 text-gray-700"
                  >
                    <td className="p-2">
                      <img
                        src={e.image}
                        alt="Product Image"
                        className="h-10 w-10 rounded-lg ring-1 ring-slate-900/5"
                      />
                    </td>
                    <td className="p-2">
                      <div className="line-clamp-3">{e.name}</div>
                    </td>
                    <td className="p-2">Tk{e.new_price}</td>
                    <td className="p-2">{cartItems[e.id]}</td>
                    <td className="p-2">Tk{e.new_price * cartItems[e.id]}</td>
                    <td className="p-2">
                      <button
                        onClick={() => removeFromCart(e.id)}
                        className="text-gray-700 hover:text-gray-900"
                      >
                        <TbTrash size={20} />
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:flex-row mt-6 md:mt-10 lg:mt-12">
        <div className="flex-1 min-w-0">
          <h4 className="font-bold mb-4">Summary</h4>

          <div className="flex justify-between py-3">
            <h4 className="medium-16">Subtotal:</h4>
            <h4 className="text-gray-700 font-semibold">
              Tk{getTotalCartAmount()}
            </h4>
          </div>
          <hr />
          <div className="flex justify-between py-3">
            <h4 className="medium-16">Shipping Fee:</h4>
            <h4 className="text-gray-700 font-semibold">Tk{getTotalCartAmount()===0?0:70}</h4>
          </div>
          <hr />
          <div className="flex justify-between py-3">
            <h4 className="bold-18 font-bold">Total:</h4>
            <h4 className="bold-18 font-bold">Tk{getTotalCartAmount()===0?0:getTotalCartAmount()+70}</h4>
          </div>

          <button onClick={()=>navigate('/order')} className="bg-orange-500 w-full max-w-[220px] rounded mt-6 py-2 text-white hover:bg-orange-600">
                        Proceed to Checkout
                    </button>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="bold-20 font-bold capitalize mb-4">
            Your Coupon Code Enter Here:
          </h4>
          <div className="flex h-[2.8rem] bg-gray-100 ring-1 ring-slate-900/10 w-full max-w-[488px] rounded overflow-hidden">
            <input
              type="text"
              placeholder="Coupon code"
              className="pl-3 bg-gray-100 border-none outline-none flex-1"
            />
            <button className="bg-black text-white px-4 rounded-r hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="pb-20" />
    </section>
  );
};

export default CartItems;

