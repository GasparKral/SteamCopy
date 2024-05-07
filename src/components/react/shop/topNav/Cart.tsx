import { Cart as CartIcon } from '@/assets/Cart';
import { isCartOpen } from '@stores/useLayoutsStore';
import { cartLength, cart } from '@stores/useCartStore';
import { useStore } from '@nanostores/react';

export const Cart = ({ styles }: { styles?: string }) => {
    const $isCartOpen = useStore(isCartOpen);
    const $cart = useStore(cart);

    return (
        <button
            onClick={() => isCartOpen.set(!$isCartOpen)}
            className={`group relative ${styles}`}
        >
            <span className='absolute -top-1 -right-2 text-xs group-hover:drop-shadow-blue-accent transition-all duration-200'>
                {cartLength() > 0 ? cartLength() : ''}
            </span>
            <CartIcon styles='group-hover:drop-shadow-blue-accent transition-all duration-200' />
        </button>
    );
};
