

export default function Button({ children }) {
    return (
        <button type="button" className='text-xl py-2 px-4 bg-white my-2 w-[8rem] border-2 border-black'>
            <span className='text-black '>
                {children}
            </span>
        </button>
    )
}
