import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ orderId }) => {
  // Retrieve order details from localStorage
  const order = JSON.parse(localStorage.getItem(`orderitem-${orderId}`));
  const items = order.items;

  return (
    <>
      {/* Order Items Section */}
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl my-6">
        <div className="space-y-6 border p-6 rounded-lg">
          <h1 className="text-3xl font-medium text-start mb-12">| Order Summary</h1>
          {/* Mapping each item in the order */}
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 bg-white py-2 px-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                {/* Product Image */}
                <img className="h-20 w-20" src={item.image} alt={item.title} />
                {/* Quantity and Price */}
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="flex items-center">
                    <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white">
                      {item.quantity}
                    </p>
                  </div>
                  <div className="text-end md:order-4 md:w-32">
                    <p className="text-base font-bold text-gray-900 dark:text-white">
                      Rs. {item.price}
                    </p>
                  </div>
                </div>
                {/* Product Title */}
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                  <p className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Original Price and Total Quantity */}
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">Rs. {order.totalPrice}</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Total Quantity</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">{order.totalItems}</dd>
              </dl>
            </div>
            {/* Total Price */}
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">Rs. {order.totalPrice}</dd>
            </dl>
          </div>
          {/* Continue Shopping Button */}
          <Link to={'/all-products'}>
            <Button gradientDuoTone="purpleToBlue" className="p-1 w-full mt-6">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

// Prop validation for OrderSummary component
OrderSummary.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default OrderSummary;
