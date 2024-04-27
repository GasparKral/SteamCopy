import { useUserStore } from '@/stores/useUserStore';
export const UserComponent = () => {
    const loggedUser = useUserStore((state) => state.user);

    return (
        <div>
            {loggedUser === null ? (
                <p>No hay usuario</p>
            ) : (
                <p>{loggedUser?.name}</p>
            )}
        </div>
    );
};
