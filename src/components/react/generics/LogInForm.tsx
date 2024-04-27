import { Close } from '@/assets/Close';
import { useUserStore } from '@/stores/useUserStore';
import { useState } from 'react';
import { ClosedEye, OpenEye } from '@assets/Eyes';
export const LogInForm = ({ closeFunction }: { closeFunction: () => void }) => {
    const setUser = useUserStore((state) => state.setUser);
    const findUser = useUserStore((state) => state.findUserForName);

    const handleLogIn = (
        e: React.FormEvent<HTMLFormElement>,
        username: string,
        password: string
    ) => {
        //realmente se haría algo asi, pero por la demo se hará directamente:  authenticate(username, password);
        e.preventDefault();
        setUser(findUser(username)!);
        localStorage.setItem('user', JSON.stringify(findUser(username)!));
        closeFunction();
    };

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPassword(!showPassword);
        const passwordField = document.getElementById('password');
        passwordField?.setAttribute('type', showPassword ? 'password' : 'text');
    };

    return (
        <form
            onSubmit={(e) => handleLogIn(e, 'test', 'test')}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 bg-dark-primary-blue p-7 px-10   rounded-lg border-2 border-accent-blue/60'
        >
            <button
                className='absolute top-2 right-2 text-light-primary-blue'
                onClick={(e) => {
                    e.preventDefault();
                    closeFunction();
                }}
            >
                <Close />
            </button>
            <fieldset className='flex flex-col min-w-[250px]'>
                <label htmlFor='username'>Usuario</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                />
            </fieldset>

            <fieldset className='flex flex-col min-w-[250px]'>
                <label htmlFor='password'>Contraseña</label>
                <div className='relative flex w-full'>
                    <input
                        className='w-full'
                        type='password'
                        name='password'
                        id='password'
                    />
                    <button
                        className='absolute top-[6px] right-2 text-gray-blue z-10 bg-white'
                        onClick={(e) => toggleShowPassword(e)}
                    >
                        {showPassword ? <ClosedEye /> : <OpenEye />}
                    </button>
                </div>
            </fieldset>

            <button
                className='bg-accent-blue/80 hover:bg-accent-blue text-neutral-50 py-1 font-bold rounded transition-colors duration-200 mt-4'
                type='submit'
            >
                Iniciar sesión
            </button>
        </form>
    );
};
