export const ClossingArrow = ({
    styles,
    width,
    height,
}: {
    styles?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <svg
            width={width || '24'}
            height={height || '24'}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={styles}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M5 12l14 0' />
            <path d='M13 18l6 -6' />
            <path d='M13 6l6 6' />
        </svg>
    );
};
