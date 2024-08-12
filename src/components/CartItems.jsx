import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
    const {getTotalCartAmount ,all_products, cartItems,removeFromCart } = useContext(ShopContext);

    return (
        <section className="pt-28 bg-gray-100 px-4 sm:px-8 lg:px-16">
            <div className="overflow-x-auto">
                <table className="min-w-full mb-8">
                    <thead>
                        <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
                            <th className="p-2 py-4">Products</th>
                            <th className="p-2 py-4">Title</th>
                            <th className="p-2 py-4">Price</th>
                            <th className="p-2 py-4">Quantity</th>
                            <th className="p-2 py-4">Total</th>
                            <th className="p-2 py-4">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_products.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <tr key={e.id} className="border-b border-slate-900/20 text-gray-700 p-6 medium-14 text-center">
                                        <td className="flexCenter">
                                            <img src={e.image} alt="prdctImg" height={43} width={43} className="rounded-lg ring-1 ring-slate-900/5 my-1" />
                                        </td>
                                        <td>
                                            <div className="line-clamp-3">{e.name}</div>
                                        </td>
                                        <td>Tk{e.new_price}</td>
                                        <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                                        <td>Tk{e.new_price * cartItems[e.id]}</td>
                                        <td>
                                            <div className="bold-22 pl-14">
                                                <TbTrash onClick={() => removeFromCart(e.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>

            <div className="w-full max-w-[500px] mt-16 p-6 bg-white rounded-md shadow-md mx-auto sm:mx-0">
                <h4 className="bold-20 mb-6 font-bold">Summary</h4>
                
                <div className="flex justify-between py-3">
                    <h4 className="medium-16">Subtotal:</h4>
                    <h4 className="text-gray-700 font-semibold">Tk{getTotalCartAmount()}</h4>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                    <h4 className="medium-16">Shipping Fee:</h4>
                    <h4 className="text-gray-700 font-semibold">Free</h4>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                    <h4 className="bold-18 font-bold">Total:</h4>
                    <h4 className="bold-18 font-bold">Tk{getTotalCartAmount()}</h4>
                </div>

                <button className="bg-black text-white rounded-full px-6 py-2 mt-4 block">Checkout</button>

                <div className="mt-8">
                    <h4 className="bold-20 font-bold mb-4">Your coupon code enter here:</h4>
                    <div className="flex items-center bg-gray-200 rounded-full ring-1 ring-slate-900/10">
                        <input
                            type="text"
                            placeholder="Coupon code"
                            className="bg-transparent flex-grow border-none outline-none py-2 px-2 text-sm"
                        />
                        <button className="bg-black text-white rounded-full px-4 py-2 ml-2">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartItems;