import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useProductCart } from './useProductCart';

const PRODUCT = { id: 'test-oil', name: 'Test Oil', price: 20, image: '/img.png', specs: '100ML' };

beforeEach(() => {
  localStorage.clear();
});

describe('useProductCart', () => {
  it('adds a new item to the cart', async () => {
    const { result } = renderHook(() => useProductCart('test-oil'));

    await act(async () => {
      result.current.addToCart(PRODUCT);
      await new Promise(r => setTimeout(r, 900));
    });

    expect(result.current.cartQuantity).toBe(1);
    const cart = JSON.parse(localStorage.getItem('yaboil_cart') ?? '[]');
    expect(cart).toHaveLength(1);
    expect(cart[0].id).toBe('test-oil');
  });

  it('increments quantity of an existing item', () => {
    localStorage.setItem('yaboil_cart', JSON.stringify([{ ...PRODUCT, quantity: 2 }]));
    const { result } = renderHook(() => useProductCart('test-oil'));

    act(() => { result.current.updateQuantity(1); });

    expect(result.current.cartQuantity).toBe(3);
  });

  it('removes item when quantity reaches zero', () => {
    localStorage.setItem('yaboil_cart', JSON.stringify([{ ...PRODUCT, quantity: 1 }]));
    const { result } = renderHook(() => useProductCart('test-oil'));

    act(() => { result.current.updateQuantity(-1); });

    expect(result.current.cartQuantity).toBe(0);
    const cart = JSON.parse(localStorage.getItem('yaboil_cart') ?? '[]');
    expect(cart).toHaveLength(0);
  });

  it('syncs quantity from cart-updated event', () => {
    const { result } = renderHook(() => useProductCart('test-oil'));

    act(() => {
      localStorage.setItem('yaboil_cart', JSON.stringify([{ ...PRODUCT, quantity: 5 }]));
      window.dispatchEvent(new Event('cart-updated'));
    });

    expect(result.current.cartQuantity).toBe(5);
  });
});
