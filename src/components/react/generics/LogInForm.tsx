import { Close } from '@/assets/Close';
import { useUserStore } from '@/stores/useUserStore';
import { useState } from 'react';
import { ClosedEye, OpenEye } from '@assets/Eyes';

export const LogInForm = ({ closeFunction }: { closeFunction: () => void }) => {
    const setUser = useUserStore((state) => state.setUser);

    const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
        const advise = document.getElementById('advise');
        const { username, password, remember } = e.target as HTMLFormElement;
        e.preventDefault();
        if (!username.value || !password.value) {
            advise?.appendChild(
                document.createTextNode('Rellene todos los campos')
            );
        }
        fetch(`/api/getUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dir: username.value,
                password: password.value,
            }),
        }).then((data) => {
            if (data.ok) {
                data.json().then((userData) => {
                    const user = JSON.parse(userData);
                    setUser(user);
                    if (remember.checked) {
                        localStorage.setItem(
                            'user',
                            JSON.stringify(user.userName)
                        );
                    }
                });
                closeFunction();
            }
            if (data.status === 404) {
                advise?.appendChild(
                    document.createTextNode('Usuario o contraseña incorrecta')
                );
            }
        });
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
            onSubmit={(e) => handleLogIn(e)}
            className='fixed w-full max-w-md h-full max-h-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 bg-dark-primary-blue p-7 px-10 rounded-lg border-2 border-accent-blue/60'
        >
            <button
                className='absolute top-2 right-2 text-light-primary-blue hover:text-neutral-50 transition-colors duration-200'
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
                <div className='mt-2 flex gap-2'>
                    <input
                        type='checkbox'
                        name='remember'
                        id='remember'
                    />
                    <label htmlFor='remember'>Recordarme más tarde</label>
                </div>
            </fieldset>

            <label
                id='advise'
                className='text-red-500 absolute bottom-16'
            />

            <button
                className='bg-accent-blue/80 hover:bg-accent-blue text-neutral-50 py-1  rounded transition-colors duration-200 relative top-8'
                type='submit'
            >
                Iniciar sesión
            </button>
        </form>
    );
};
