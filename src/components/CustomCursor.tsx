import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState<'default' | 'hover' | 'drag' | 'text'>('default');
  const [label, setLabel] = useState('');
  const labelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const dotX = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.4 });
  const dotY = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.4 });
  const ringX = useSpring(rawX, { stiffness: 180, damping: 28, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 28, mass: 0.6 });

  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const resolve = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const drag = el.closest('[data-cursor="drag"]');
      const interactive = el.closest('a, button, [role="button"], label');
      const textEl = el.closest('input, textarea');

      if (drag) {
        setState('drag');
        setLabel('DRAG');
      } else if (textEl) {
        setState('text');
        setLabel('');
      } else if (interactive) {
        setState('hover');
        const hint = (interactive as HTMLElement).dataset.cursorLabel ?? '';
        setLabel(hint);
      } else {
        setState('default');
        setLabel('');
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', resolve);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', resolve);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (labelTimeout.current) clearTimeout(labelTimeout.current);
    };
  }, [visible, isTouchDevice]);

  const ringSize = state === 'hover' ? 56 : state === 'drag' ? 72 : state === 'text' ? 4 : 36;
  const dotSize = state === 'text' ? 24 : state === 'hover' ? 5 : 5;
  const ringBorder = state === 'hover' ? 1.5 : 1;

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer inversing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white flex items-center justify-center overflow-hidden"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? (state === 'text' ? 0.15 : 0.85) : 0,
          borderWidth: ringBorder,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-black font-mono text-[7px] tracking-widest font-bold uppercase select-none leading-none"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: visible ? (state === 'text' ? 0 : 1) : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
