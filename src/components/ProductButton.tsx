import React, { useState } from 'react';

interface ProductButtonProps {
  onClick?: () => void;
  variant?: 'main' | 'mobile';
  className?: string;
  status?: 'idle' | 'adding' | 'added';
}

export default function ProductButton({
  onClick,
  variant = 'main',
  className = '',
  status: externalStatus,
}: ProductButtonProps) {
  const [internalStatus, setInternalStatus] = useState<'idle' | 'adding' | 'added'>('idle');

  // Use external status if provided, otherwise fall back to internal self-managed state
  const status = externalStatus !== undefined ? externalStatus : internalStatus;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (status !== 'idle') return;

    if (externalStatus === undefined) {
      setInternalStatus('adding');
      if (onClick) onClick();
      setTimeout(() => {
        setInternalStatus('added');
        setTimeout(() => {
          setInternalStatus('idle');
        }, 2000);
      }, 800);
    } else {
      if (onClick) onClick();
    }
  };

  if (variant === 'mobile') {
    return (
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={status === 'adding'}
        className={`bg-raw-sienna text-canvas px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer select-none disabled:opacity-90 ${className}`}
      >
        {status === 'idle' && 'Add to Cart'}
        {status === 'adding' && 'Adding...'}
        {status === 'added' && 'Added ✓'}
      </button>
    );
  }

  // Main full-width variant
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={status === 'adding'}
      className={`w-full bg-raw-sienna text-canvas font-label-caps text-label-caps py-5 px-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[16px_24px_48px_-12px_rgba(74,44,17,0.12)] uppercase tracking-widest relative overflow-hidden group shadow-lg cursor-pointer select-none disabled:opacity-90 ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {status === 'idle' && 'Add to Cart'}
        {status === 'adding' && 'Adding to Cart...'}
        {status === 'added' && 'Product Added ✓'}
        {status === 'idle' && (
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 select-none">
            arrow_forward
          </span>
        )}
      </span>
    </button>
  );
}
