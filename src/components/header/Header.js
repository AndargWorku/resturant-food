import React,{useRef} from 'react'
import {Container} from "reactstrap"
import './Header.css'
const navlinks=[
    {
        display:"Home",
        url:'#',
    },
    {
        display:"About",
        url:'#',
    },
    {
        display:"Menu",
        url:'#',
    },
    {
        display:"Recipe",
        url:'#',
    },
    {
        display:"Contact",
        url:'#',
    }
]
const Header = () => {
    const menuRef=useRef()
    const menuToggle=()=>menuRef.current.classList.toggle('active_menu')
  return (
    <div className="header">
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className="d-flex align-items-center gap-1">
                        <span> <i class="ri-restaurant-2-fill"></i>Chef food</span>
                    </h2>
                </div>
                <div className="nav_menu" ref={menuRef}>
                    <div className="nav_list_wrapper d-flex align-items-center gap-5">
                    <ul className="nav_list">
                        {
                            navlinks.map((item,index)=>(
                                <li className="nav_item" key={index}><a href={item.url}  onClick={menuToggle}>{item.display}</a></li>
                            ))
                        }   
                    </ul>
                    <div className="nav_right">
                    <div className="custom_search">
                        <input type="text" placeholder="search item ..."/>
                        <span><i class="ri-search-line"></i></span>
                    </div>
                </div>
                </div>
                    
                </div>
                <div>
                    <span className="cart_icon">
                        <i class="ri-shopping-basket-line"></i>
                        <span className="badge">2</span>

                    </span>
                   
                </div>
                
                <div className="mobile_menu">
                    <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Header
