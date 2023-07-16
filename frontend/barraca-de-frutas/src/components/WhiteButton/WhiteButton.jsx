import './whiteButton.css'

export function WhiteButton({children, ...restProps}){

    return(
        <>
             <div className='whiteButton-container'>
                <button className="whiteButton-links" {...restProps}>
                    {children}
                </button>
            </div>
        </>
    )
}