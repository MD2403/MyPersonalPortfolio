import CartItems from '../../components/CartItems';
import CartTotal from '../../components/CartTotal';

const Cart = () => {
  return (
    <section className="bg-white w-full py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
        
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* All Cart Items */}
          <CartItems />
          
          {/* Cart Items Total */}
          <CartTotal />
        </div>
      </div>
    </section>
  );
}

export default Cart;
