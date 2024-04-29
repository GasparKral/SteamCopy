export const Arrow = ({
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
            <path d='M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z' />
            <path d='M3 9v6' />
        </svg>
    );
};
