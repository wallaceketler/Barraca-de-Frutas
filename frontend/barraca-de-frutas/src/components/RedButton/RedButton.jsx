import './redButton.css'

export function RedButton({children, ...restProps}){

    return(
        <>
            <div className='redButton-container'>
                <button className="redButton-links" {...restProps}>
                    {children}
                </button>
            </div>
        </>
    )
}