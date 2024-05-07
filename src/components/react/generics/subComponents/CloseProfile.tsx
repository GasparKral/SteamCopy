
export const CloseProfile = ({
    closeFunction,
}: {
    closeFunction: () => void;
}) => {
   

    const handleClose = () => {
        closeFunction();
        
        localStorage.removeItem('user');
    };

    return (
        <article className='flex flex-col absolute top-10 right-16 z-10 bg-gray-800 text-neutral-50  rounded-sm ring-1  w-[200px]'>
            <button className='hover:text-accent-blue hover:bg-accent-blue/20 rounded-sm px-2 transition-colors duration-200 py-1'>
                cambiar de cuenta
            </button>
            <button
                className='hover:text-red-500 hover:bg-red-500/20 rounded-sm px-2 transition-colors duration-200 py-1'
                onClick={() => handleClose()}
            >
                salir
            </button>
        </article>
    );
};
