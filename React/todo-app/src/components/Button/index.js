export default ({className, onClick, title}) => {

    //console.log(className, title)
    return (
        <button className={className} onClick={onClick}> {title} </button>
        
    )
    
}