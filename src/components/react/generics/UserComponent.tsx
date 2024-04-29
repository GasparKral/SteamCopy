import { useUserStore } from '@/stores/useUserStore';
import { useState, useEffect } from 'react';
import { LogInForm } from '@reactC/generics/LogInForm';
import { Notifications } from '@assets/Notifications';
import { CloseProfile } from '@reactC/generics/subComponents/CloseProfile';
export const UserComponent = () => {
    const [open, setOpen] = useState(false);
    const loggedUser = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);

    const handleClick = () => {
        if (localStorage.getItem('user')) {
            const cachedUser = JSON.parse(localStorage.getItem('user')!);
            setUser(cachedUser);
        } else {
            setOpen(true);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('user')) {
            const cachedUser = JSON.parse(localStorage.getItem('user')!);
            setUser(cachedUser);
        }
    }, []);

    return (
        <>
            {loggedUser === null ? (
                <div className='flex gap-4 relative transition-colors duration-200 px-2 align-middle'>
                    <button
                        onClick={() => handleClick()}
                        className='w-full text-accent-blue/80 hover:text-accent-blue'
                    >
                        Iniciar
                    </button>
                    <a
                        href='/regist'
                        className='w-full text-saturated-green/80 bg-desaturated-green rounded-md hover:text-saturated-green hover:bg-desaturated-green/80 px-2'
                    >
                        Registrarse
                    </a>
                </div>
            ) : (
                <div className='flex gap-8 align-middle mr-8 items-center'>
                    <button className='bg-gray-blue/60 px-1 py-1 rounded hover:bg-gray-blue transition-colors duration-200'>
                        <Notifications
                            width='16'
                            height='16'
                        />
                    </button>
                    <div className='flex gap-2'>
                        <div className='flex flex-col align-baseline items-end'>
                            <p style={{ fontSize: '14px', lineHeight: '12px' }}>
                                {loggedUser?.username}
                            </p>
                            <small className='text-gray-blue text-xs'>
                                {loggedUser?.wallet + '€'}
                            </small>
                        </div>
                        <img
                            onClick={() => setOpen(true)}
                            className='rounded-md ring-2 ring-accent-blue h-8'
                            src={loggedUser?.avatar}
                            alt={`Avatar of ${loggedUser?.username}`}
                        />
                        {open && loggedUser !== null && (
                            <CloseProfile
                                closeFunction={() => setOpen(false)}
                            />
                        )}
                    </div>
                </div>
            )}

            {open && loggedUser === null && (
                <LogInForm closeFunction={() => setOpen(false)} />
            )}
        </>
    );
};
