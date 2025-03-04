"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define cart context
type CartItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    qty: number;
    color: string;
    size: string;
  };
  
  // type CartContextType = {
  //   cart: CartItem[];
  //   addToCart: (item: CartItem) => void;
  //   removeFromCart: (id: number) => void;
  //   clearCart: () => void;
  // };
  type CartContextType = {
    cart: CartItem[];
    cartCount: number;
    addToCart: (item: CartItem, quantity: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
  };
  

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  // const addToCart = (item: CartItem, quantity:number) => {
  //   setCartCount((prev) => prev + quantity);
  //   setCart((prev) => [...prev, item]);
  // };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to add items to cart
  // const addToCart = (item: CartItem, quantity: number) => {
  //   setCartCount((prev) => prev + quantity);
  //   setCart((prev) => [...prev, item]);
  // };
  const addToCart = (item: CartItem, quantity: number) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size);
  
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color && cartItem.size === item.size
            ? { ...cartItem, qty: cartItem.qty + quantity }
            : cartItem
        );
      } else {
        return [...prev, { ...item, qty: quantity }];
      }
    });
    setCartCount((prev) => prev + quantity);
  };
  

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart ,removeFromCart, clearCart   }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
