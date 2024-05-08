import { animate, motion } from 'framer-motion';
import { Cart as CartIcon } from '@/assets/Cart';
import { isCartOpen } from '@stores/useLayoutsStore';
import { cartLength, cart } from '@stores/useCartStore';
import { useStore } from '@nanostores/react';
import { useRef, useEffect } from 'react';

export const Cart = ({ styles }: { styles?: string }) => {
    const $isCartOpen = useStore(isCartOpen);
    const $cart = useStore(cart);
    const bounceRef = useRef(null);

    useEffect(() => {
        animate(bounceRef.current, { y: [0, -20, 0] }, { duration: 0.2 });
    }, [$cart.length]);

    return (
        <button
            onClick={() => isCartOpen.set(!$isCartOpen)}
            className={`group relative ${styles}`}
        >
            <motion.span
                className='absolute -top-1 -right-2 text-xs group-hover:drop-shadow-blue-accent transition-all duration-200'
                ref={bounceRef}
            >
                {cartLength() > 0 ? cartLength() : ''}
            </motion.span>
            <CartIcon styles='group-hover:drop-shadow-blue-accent transition-all duration-200' />
        </button>
    );
};
