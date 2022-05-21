import React from "react";
import './Navbar.css';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    static defaultProps = {
        display_the_alpha: true,
        items: [],
    }

    render(props){
        console.log(this.props.items);
        return(<div className='navbar'>
                {this.props.display_the_alpha && <NavLink to='/' className='the-alpha'>α</NavLink>}
                {this.props.items.map((item, index)=>
                    <NavLink 
                        to={item.link}
                        className={
                            ({isActive})=> isActive ? 'navbar-item navbar-item-active' : 'navbar-item'
                        }
                        key={index}
                    >
                        {item.text}
                    </NavLink>
                )}
        </div>);
    }
}

export default Navbar;