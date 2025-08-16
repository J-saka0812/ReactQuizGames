

export default function Button({ children, onClick }) { 
    
    return (
        <button type="button" className='text-xl py-2 px-4 bg-white my-2 w-[8rem] border-2 border-black' onClick={onClick}>
            <span className='text-black '>
                {children}
            </span>
        </button>
    )
}
