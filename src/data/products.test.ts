import { describe, it, expect } from 'vitest';
import { products, getProduct } from './products';

describe('product catalog', () => {
  it('has a unique id for every product', () => {
    const ids = products.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('round-trips every product through getProduct', () => {
    for (const p of products) {
      expect(getProduct(p.id)).toBe(p);
    }
  });

  it('returns undefined for an unknown id', () => {
    expect(getProduct('does-not-exist')).toBeUndefined();
  });

  it('has the required display fields populated on every product', () => {
    for (const p of products) {
      expect(p.name).toBeTruthy();
      expect(p.price).toBeGreaterThan(0);
      expect(p.specs).toBeTruthy();
      expect(p.image).toBeTruthy();
      expect(p.bgGradient).toMatch(/^linear-gradient/);
      expect(p.sections.length).toBeGreaterThan(0);
    }
  });

  it('keeps Black Seed first and Rosemary flagged as the Best Seller', () => {
    expect(products[0].id).toBe('black-seed');
    const featured = products.filter((p) => p.tag === 'Best Seller');
    expect(featured).toHaveLength(1);
    expect(featured[0].id).toBe('rosemary');
  });
});
