import { useUserStore } from '@/stores/useUserStore';
import { useState, useMemo } from 'react';
import { LogInForm } from '@reactC/generics/LogInForm';
import { Notifications } from '@assets/Notifications';
import { CloseProfile } from '@reactC/generics/subComponents/CloseProfile';


export const UserComponent = () => {
    const [open, setOpen] = useState(false);
    const loggedUser = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);



    return (
        <>
            {loggedUser === null ? (
                
            ) : (
                 <img
                            onClick={() => setOpen(true)}
                            className='rounded-md ring-2 ring-accent-blue h-8'
                            src={loggedUser?.avatar ?? '/steampowered-tile.svg'}
                            alt={`Avatar of ${loggedUser?.userName}`}
                        />
                        {open && loggedUser !== null && (
                            <CloseProfile
                                closeFunction={() => setOpen(false)}
                            />
                        )}

            
        </>
    );
};
