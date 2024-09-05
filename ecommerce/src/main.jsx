import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import { store } from './lib/store/Store.js'
import AllProducts from './pages/allProducts/AllProducts.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'

// Define the application routes using react-router-dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/all-products',
        element: <AllProducts />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
)
