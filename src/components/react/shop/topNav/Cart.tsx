import { Cart as CartIcon } from '@/assets/Cart';
import { useCartStore } from '@stores/useCartStore';
import { useOpensLayouts } from '@stores/useOpensLayouts';
export const Cart = ({ styles }: { styles?: string }) => {
    const CartLength = useCartStore((state) => state.cart.length);
    const { setCartOpen, cartOpen } = useOpensLayouts();

    const openCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <button
            onClick={openCart}
            className={`group relative ${styles}`}
        >
            <span className='absolute -top-1 -right-2 text-xs group-hover:drop-shadow-blue-accent transition-all duration-200'>
                {CartLength === 0 ? '' : CartLength}
            </span>
            <CartIcon styles='group-hover:drop-shadow-blue-accent transition-all duration-200' />
        </button>
    );
};
