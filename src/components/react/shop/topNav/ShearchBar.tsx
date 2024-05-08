import { Search } from '@assets/Search';
import { useDebounceCallback } from 'usehooks-ts';
import { useState, useMemo } from 'react';

export const SearchBar = () => {
    const [searchText, setSearch] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const debouncedCallback = useDebounceCallback(setSearch, 500);

    useMemo(() => {
        fetch('/api/games/getseartchgames.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                search: searchText,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, [searchText]);

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
                onChange={(event) => debouncedCallback(event.target.value)}
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
