export const Heart = ({
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
            fill='currentColor'
            className={styles}
        >
            <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
            />
            <path d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z' />
        </svg>
    );
};
