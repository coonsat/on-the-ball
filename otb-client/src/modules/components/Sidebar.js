import React, { useContext, useState } from 'react';
import Context from '../context/index';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';

// internal import
import otb from '../resources/images/on-the-ball-cover.jpg';
import { sidebar } from '../helper/sidebar';

const Sidebar = () => {
    const context = useContext(Context.Context);
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    console.log(sidebar);

    const handleClick = () => {};
    
    const handleLogout = () => {};

    return (
        <div className={`sidebar-wrapper-${toggle ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <AiOutlineMenu className="toggle" onClick={() => setToggle(!toggle)}/>
                <div className={`sidebar-header-contents ${!toggle ? 'hide' : ''}`}>
                    <h3>On The Ball</h3>
                </div>
                <img src={otb}
                        alt="On The Ball"
                        className={`sidebar-icon ${!toggle ? 'hide' : ''}`}
                    />
            </div>

            <div className="sidebar-content-wrapper">
                {sidebar.map((item, index) => {
                    return  (<div className={`sidebar-item-${toggle ? 'open' : 'closed'}`} key={index}>
                                <Link to={item.title === 'Home' ? '/' : item.path}>
                                    <div className='sidebar-icon'>{item.icon}</div>
                                    <div className={`sidebar-item-title ${!toggle ? 'hide' : ''}`}>{item.title}</div>
                                </Link>
                            </div>)
                })}
            </div>

            <div className={`sidebar-item-${toggle ? 'open' : 'closed'}`}>
                <Link to='/logout'>
                    <div className='sidebar-icon'><AiOutlineLogout /></div>
                    <div className={`sidebar-item-title ${!toggle ? 'hide' : ''}`}>Logout</div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
