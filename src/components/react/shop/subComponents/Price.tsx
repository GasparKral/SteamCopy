export const Price: React.FC<{
    price: number;
    offert: boolean;
    offertedPrice: number | null;
}> = ({ price, offert, offertedPrice }) => (
    <small className='text-lg'>
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
