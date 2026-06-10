import { useState, useEffect } from 'react';

interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: string;
}

function readCart(): any[] {
  try {
    const raw = localStorage.getItem('yaboil_cart');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCart(cart: any[]) {
  localStorage.setItem('yaboil_cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
}

export function useProductCart(productId: string) {
  const getQuantity = () => {
    const item = readCart().find((i: any) => i.id === productId);
    return item ? item.quantity : 0;
  };

  const [cartStatus, setCartStatus] = useState<'idle' | 'adding' | 'added'>('idle');
  const [cartQuantity, setCartQuantity] = useState(getQuantity);

  useEffect(() => {
    const sync = () => setCartQuantity(getQuantity());
    window.addEventListener('storage', sync);
    window.addEventListener('cart-updated', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('cart-updated', sync);
    };
  }, []);

  const updateQuantity = (delta: number) => {
    const cart = readCart();
    const idx = cart.findIndex((i: any) => i.id === productId);
    if (idx > -1) {
      const next = cart[idx].quantity + delta;
      if (next <= 0) cart.splice(idx, 1);
      else cart[idx].quantity = next;
    }
    writeCart(cart);
    setCartQuantity(getQuantity());
  };

  const addToCart = (product: CartProduct) => {
    setCartStatus('adding');
    setTimeout(() => {
      const cart = readCart();
      const idx = cart.findIndex((i: any) => i.id === product.id);
      if (idx > -1) {
        cart[idx].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      writeCart(cart);
      setCartStatus('added');
      setTimeout(() => setCartStatus('idle'), 2000);
    }, 800);
  };

  return { cartStatus, cartQuantity, updateQuantity, addToCart };
}
