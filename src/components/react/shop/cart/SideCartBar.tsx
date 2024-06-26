import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { isCartOpen, setIsCartOpen } from '@stores/useLayoutsStore';
import { cart } from '@stores/useCartStore';
import { CartGameComponent } from '@reactC/shop/cart/CartGameComponent';
import { ClossingArrow } from '@assets/ClossingArrow';
export const SideCartBar = () => {
    const $isCartOpen = useStore(isCartOpen);
    const $cart = useStore(cart);

    return (
        <AnimatePresence>
            {$isCartOpen && (
                <motion.aside
                    className='fixed flex flex-col  right-0 top-20 h-[calc(100vh-80px)] max-w-[255px] w-full pt-12 bg-dark-primary-blue z-10 border-l-2 border-accent-blue/40'
                    initial={{ x: '100%' }}
                    animate={{
                        x: 0,
                        transition: { duration: 0.3 },
                        type: 'tween',
                    }}
                    exit={{
                        x: '100%',
                        transition: { duration: 0.2 },
                        type: 'tween',
                    }}
                >
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className='absolute top-2 left-0 p-2'
                    >
                        <ClossingArrow />
                    </button>

                    <ul className='flex flex-col'>
                        {$cart.map((cart) => (
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
                </motion.aside>
            )}
        </AnimatePresence>
    );
};
