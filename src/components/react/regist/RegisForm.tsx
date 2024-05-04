import { useUserStore } from '@stores/useUserStore';
import { OpenEye, ClosedEye } from '@assets/Eyes';
import { useState } from 'react';

export const prerender = true;

export const RegisForm = () => {
    const state = useUserStore((state) => state);
    const advise = document.getElementById('advise');

    const submited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, email, password } = e.target as HTMLFormElement;

        if (!username.value || !email.value || !password.value) {
            advise?.appendChild(
                document.createTextNode('Rellene todos los campos')
            );
            return;
        }

        fetch('/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: username.value,
                email: email.value,
                password: password.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 200) {
                    state.setUser(data.user);
                }
                if (data.status === 400) {
                    advise?.appendChild(
                        document.createTextNode('Rellene todos los campos')
                    );
                }
                if (data.status === 409) {
                    advise?.appendChild(
                        document.createTextNode(
                            'El nombre de usuario ya existe introduzca otro porfavor'
                        )
                    );
                }
            });
    };
    const [showPassword, setShowPassword] = useState(false);
    const changeShowPassword = () => {
        const password = document.getElementById(
            'password'
        ) as HTMLInputElement;
        password.type = password.type === 'password' ? 'text' : 'password';
        setShowPassword(!showPassword);
    };

    return (
        <form
            onSubmit={(e) => submited(e)}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xl w-full flex flex-col gap-4 items-center'
        >
            <fieldset className='flex flex-col w-full gap-2'>
                <label htmlFor='username'>Nombre de usuario:</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Username'
                />
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                />

                <label htmlFor='password'>Contraseña:</label>
                <div className='relative w-full'>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        className='w-full'
                    />
                    <button
                        className='absolute -right-1 top-[2px] p-1 rounded mr-2 text-dark-primary-blue'
                        type='button'
                        id='showPassword'
                        onClick={changeShowPassword}
                    >
                        {showPassword ? <ClosedEye /> : <OpenEye />}
                    </button>
                </div>
                <div className='mt-2 flex gap-4'>
                    <input
                        type='checkbox'
                        name='remember'
                        id='remember'
                    />
                    <label htmlFor='remember'>Recordarme más tarde</label>
                </div>
            </fieldset>

            <label id='advise' />
            <button
                type='submit'
                className='w-3/5 bg-accent-blue/80 hover:bg-accent-blue text-neutral-50 transition-colors duration-200 rounded-md p-2 mt-8'
            >
                Registrarme
            </button>
        </form>
    );
};
