import { LuMinus, LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../lib/store/features/cartSlice";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { useEffect } from "react";

const CartItems = () => {
  const Items = useSelector((state) => state.cart.items); // Fetching cart items from Redux store
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle adding item to cart
  const addItem = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 })); // Adding one more of the same item
    toast.success("Item Added to Cart");
  };

  // Function to handle removing an item or reducing its quantity
  const removeItem = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ ...item, quantity: -1 })); // Reducing item quantity by 1
    } else {
      dispatch(removeFromCart(item));  // Removing item entirely if quantity is 1
    }
    toast.success("Item Removed from Cart");
  };

  // Function to handle removing all of a specific item from the cart
  const removeAllItems = (item) => {
    dispatch(removeFromCart(item)); // Removing all instances of the item from the cart
    toast.success("Item Removed from Cart");
  };

  // Redirect user to the product page if cart is empty
  useEffect(() => {
    if (!Items.length) {
      navigate("/all-products");
      toast.error("Please Add Some Items To Cart");
    }
  }, [Items, navigate]);

  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6">
        {/* Mapping through cart items */}
        {Items.map((item) => (
          <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
              {/* Displaying item image */}
              <img className="h-20 w-20" src={item.image} alt={item.title} />
              
              {/* Quantity controls */}
              <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button onClick={() => removeItem(item)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <LuMinus />
                  </button>
                  <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white">{item.quantity}</p>
                  <button onClick={() => addItem(item)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <LuPlus />
                  </button>
                </div>

                {/* Displaying item price */}
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">Rs. {item.price}</p>
                </div>
              </div>

              {/* Item details and remove button */}
              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <p className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.title}</p>

                <div className="flex items-center gap-4">
                  {/* Remove all button */}
                  <button onClick={() => removeAllItems(item)} className="inline-flex items-center text-sm gap-1 font-medium text-red-600 hover:underline dark:text-red-500">
                    <RxCross2 size={18} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
