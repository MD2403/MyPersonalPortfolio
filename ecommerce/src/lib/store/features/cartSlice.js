import { createSlice } from '@reduxjs/toolkit';

// Helper function to get cart data from localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  // Fetch cart data from localStorage if present, else define an empty cart object
  return cart ? JSON.parse(cart) : { items: [], totalItems: 0, totalPrice: 0 };
};

// Helper function to save cart data to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Initialize initial state from localStorage
const initialState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart and update localStorage
    addToCart: (state, action) => {
      const index = state.items.findIndex(prod => prod.id === action.payload.id);
      if (index !== -1) {
        // If the item already exists in the cart
        const stateQuantity = state.items[index].quantity;
        const payloadQuantity = action.payload.quantity;
        // Remove item if quantity becomes zero or less
        if (stateQuantity + payloadQuantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        } else {
          // Update item quantity
          state.items[index].quantity += payloadQuantity;
        }
      } else {
        // Add new item to the cart
        state.items.push(action.payload);
      }
      // Recalculate total price and total items
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      // Save updated cart to localStorage
      saveCartToLocalStorage(state);
    },
    // Remove item from the cart and update localStorage
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(prod => prod.id === action.payload.id);
      if (index !== -1) {
        // Remove item from the cart
        state.items = state.items.filter(item => item.id !== action.payload.id);
        // Recalculate total price and total items
        state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
        // Save updated cart to localStorage
        saveCartToLocalStorage(state);
      }
    },
    // Clear the cart and update localStorage
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      // Save cleared cart to localStorage
      saveCartToLocalStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
