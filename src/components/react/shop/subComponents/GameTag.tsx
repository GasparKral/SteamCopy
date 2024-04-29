export const GameTag = ({ styles, tag }: { styles?: string; tag: string }) => {
    return (
        <p
            className={`text-sm text-neutral-50 bg-gray-blue px-2 rounded-md ${styles}`}
        >
            {tag}
        </p>
    );
};
