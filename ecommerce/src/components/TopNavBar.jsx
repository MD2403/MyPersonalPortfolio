import { Navbar } from "flowbite-react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TopNavBar() {
  // Get total items and total price from the Redux store
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          KharidiKaro.com
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/cart">
          <div className="flex items-center px-3 py-2 gap-2 border bg-neutral-200 rounded-lg">
            <div className="relative">
              <CiShoppingCart size={22} />
              <p className="text-white bg-red-600 px-1 rounded-full text-center text-xs absolute -top-2 -right-2">
                {totalItems}
              </p>
            </div>
            <p className="font-medium text-red-500">Rs. {totalPrice}</p>
          </div>
        </Link>
        {/* Responsive Navbar Toggle Button */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* Navigation Links */}
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/all-products">
          All Products
        </Navbar.Link>
        <Navbar.Link as={Link} to="/cart">
          Cart
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
