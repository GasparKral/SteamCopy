import { whistList, whistlistLength } from '@stores/useWhistlistStore';
import { useStore } from '@nanostores/react';
export const WishList = ({ styles }: { styles?: string }) => {
    const $whistList = useStore(whistList);

    return (
        <a
            className={styles}
            href='/deseados'
        >
            Deseados
            {whistlistLength() > 0 ? `(${whistlistLength()})` : ''}
        </a>
    );
};
