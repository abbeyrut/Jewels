import React from 'react'

const Header = ({title}) => {
    const onSubmit =() =>{
        console.log('submit')
    }
  return (
    <header className='header'>
<img src="https://images.unsplash.com/photo-1633607092297-95cd35aecba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
        alt="logo" width='50px' height='50px'></img>
        <h1>Brass Collection{title} </h1>
        <button  onSubmit={onSubmit} type='Submit'  className='btn-1'>Submit </button>
    </header>
  )
}

Header.defaultProps={
    title : 'JEWELLERY'
}
export default Header