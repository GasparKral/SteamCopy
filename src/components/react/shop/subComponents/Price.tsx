export const Price: React.FC<{
    price: number;
    offert: boolean;
    offertedPrice: number | null;
    size?: 'lg' | 'xl' | '3xl' | '5xl';
    className?: string;
}> = ({ price, offert, offertedPrice, size = 'lg', className }) => (
    <small className={`text-${size} ${className}`}>
        {price === 0 ? (
            'Gratis'
        ) : offert ? (
            <>
                <span className='line-through text-saturated-green bg-desaturated-green rounded-md px-1'>
                    {price}€
                </span>{' '}
                <span className='text-accent-blue'>{offertedPrice}€</span>
            </>
        ) : (
            `${price}€`
        )}
    </small>
);
