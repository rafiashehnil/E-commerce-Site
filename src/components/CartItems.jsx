import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
    const { all_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    return (
        <section className="max_padd-container pt-28 bg-gray-100">
            <table className="w-full mx-auto">
                <thead>
                    <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
                        <th className="p-1 py-2">Products</th>
                        <th className="p-1 py-2">Title</th>
                        <th className="p-1 py-2">Price</th>
                        <th className="p-1 py-2">Quantity</th>
                        <th className="p-1 py-2">Total</th>
                        <th className="p-1 py-2">Remove</th>
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

            <div className="w-full max-w-[666px] mt-16 p-8 bg-white rounded-md">
                <h4 className="bold-20 mb-8 font-bold">Summary</h4>
                
                <div className="flex justify-between py-4">
                    <h4 className="medium-16">Subtotal:</h4>
                    <h4 className="text-gray-700 font-semibold">Tk{0}</h4>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                    <h4 className="medium-16">Shipping Fee:</h4>
                    <h4 className="text-gray-700 font-semibold">Free</h4>
                </div>
                <hr />
                <div className="flex justify-between py-4">
                    <h4 className="bold-18 font-bold">Total:</h4>
                    <h4 className="bold-18 font-bold">Tk{0}</h4>
                </div>

                <button className="bg-black text-white rounded-full px-6 py-3 mt-4">Checkout</button>

                <div className="mt-10">
                    <h4 className="bold-20 font-bold mb-4">Your coupon code enter here:</h4>
                    <div className="flex items-center pl-5 h-12 bg-white rounded-full ring-1 ring-slate-900/10">
                        <input
                            type="text"
                            placeholder="Coupon code"
                            className="bg-transparent flex-grow border-none outline-none"
                        />
                        <button className="bg-black text-white rounded-full px-6 py-2 h-full">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartItems;
