

const Button =  ({title,onClick}) => {
    
  return (
    <div className="main col-1">
        <p><h2> {title}</h2></p>
        
        <div><p><button className="btn" onClick={onClick}> jewel 1</button></p>
       <p><button className="btn" onClick={onClick}> jewel 2</button></p> 
       <p><button className="btn" onClick={onClick}> jewel 3</button></p> 
       </div>
        
        
         </div>
    
  )
}
Button.defaultProps={
    color: 'steelblue'
}

export default Button