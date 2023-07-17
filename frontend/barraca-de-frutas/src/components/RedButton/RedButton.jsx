import './redButton.css'

export function RedButton({link, children, ...restProps}){
    if(link){
        return(
            <>
                <div className='redButton-container'>
                    <a className="redButton-linksA" {...restProps}>
                        {children}
                    </a>
                </div>
            </>
        )
    }
    else{
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
}