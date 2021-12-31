import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/index';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai';

// internal import
import otb from '../resources/images/on-the-ball-cover.jpg';
import { sidebar } from '../helper/sidebar';

const Sidebar = () => {
    const context = useContext(Context.Context);
    // const authUser = context.authenticatedUser;
    const [authUser, setAuthUser] = useState('');
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState('');
    console.log(authUser);

    useEffect(() => {
        setAuthUser(context.authenticatedUser);
    }, [authUser])

    return (
        <div className={authUser ? `sidebar-wrapper-${toggle ? 'open' : 'closed'}` : "hide"}>
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
                                <Link 
                                    to={item.title === 'Home' ? '/' : item.path} 
                                    onClick={() => setSelected(item.title)}
                                >
                                    <div className={`sidebar-icon ${item.title === selected ? 'selected' : ''}`}>{item.icon}</div>
                                    <div className={`sidebar-item-title ${!toggle ? 'hide' : ''} ${item.title === selected ? 'selected' : ''}`}>{item.title}</div>
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
