import { Search } from '@assets/Search';
import { useDebounceValue } from 'usehooks-ts';
import { useState, useRef } from 'react';
import { db, Games, GamesTags, Tags, eq } from 'astro:db';
export const SearchBar = () => {
    const [searchText, setSearch] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

     const search = useDebounceValue(inputRef.current?.value, 500,);

    return (
        <form
            onSubmit={(e) => handleSearch(e)}
            className='flex items-center relative'
        >
            <input
                style={{
                    backgroundColor: '#171D25',
                    border: 'none',
                    height: '30px',
                    width: '250px',
                }}
                type='text'
                placeholder='Buscar...'
                className='outline-none text-neutral-50/80 bg-dark-primary-blue'
                id='search'
                ref={inputRef}
            />
            <button
                type='submit'
                className='absolute right-1 z-10 bg-dark-primary-blue'
            >
                <Search />
            </button>
        </form>
    );
};
