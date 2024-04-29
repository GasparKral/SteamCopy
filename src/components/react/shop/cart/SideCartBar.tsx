import { useCartStore } from '@stores/useCartStore';
import { CartGameComponent } from '@reactC/shop/cart/CartGameComponent';
import { useOpensLayouts } from '@stores/useOpensLayouts';
import { ClossingArrow } from '@assets/ClossingArrow';
export const SideCartBar = () => {
    const cart = useCartStore((state) => state.cart);
    const cartOpen = useOpensLayouts((state) => state);

    return (
        <>
            {cartOpen.cartOpen ? (
                <aside className='fixed flex flex-col items-center right-0 top-20 h-[calc(100vh-80px)] w-[255px] pr-4 py-4 pt-16 bg-dark-primary-blue z-10 '>
                    <button
                        onClick={() => cartOpen.setCartOpen(false)}
                        className='absolute top-2 left-0 p-2'
                    >
                        <ClossingArrow />
                    </button>

                    <ul className='flex flex-col gap-2'>
                        {cart.map((cart) => (
                            <CartGameComponent
                                key={cart.id}
                                game={cart}
                            />
                        ))}
                    </ul>
                    <a
                        className='w-4/5 absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent-blue/80 text-neutral-50 p-2 rounded-lg text-center hover:bg-accent-blue'
                        href='/pagos'
                    >
                        COMPRAR
                    </a>
                </aside>
            ) : null}
        </>
    );
};
