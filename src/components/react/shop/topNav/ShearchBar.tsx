import { Search } from '@assets/Search';
export const SearchBar = () => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

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
