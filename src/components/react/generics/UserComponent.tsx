import { useUserStore } from '@/stores/useUserStore';
import { useState, useEffect } from 'react';
import { LogInForm } from '@reactC/generics/LogInForm';
import { Notifications } from '@assets/Notifications';
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
    },[])

    return (
        <>
            <div>
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
                    <div className='flex gap-4 align-middle'>
                        <button className='bg-gray-blue/60 px-1 rounded hover:bg-gray-blue transition-colors duration-200'>
                            <Notifications
                                width='16'
                                height='16'
                            />
                        </button>
                        <p>{loggedUser?.username}</p>
                    </div>
                )}
            </div>
            {open && <LogInForm closeFunction={() => setOpen(false)} />}
        </>
    );
};
