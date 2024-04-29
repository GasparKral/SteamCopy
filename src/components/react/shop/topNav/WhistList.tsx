import { useWhistListStore } from '@/stores/useWhistListStore';
export const WishList = ({ styles }: { styles?: string }) => {
    const WhistListLength = useWhistListStore((state) => state.whisList);

    return (
        <a
            className={styles}
            href='/deseados'
        >
            Deseados
            {WhistListLength.listOfGames.length == 0
                ? ''
                : `(${WhistListLength.listOfGames.length})`}
        </a>
    );
};
