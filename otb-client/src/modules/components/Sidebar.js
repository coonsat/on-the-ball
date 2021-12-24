import React, { useContext, useState } from 'react';
import Context from '../context/index';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

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
                <AiOutlineMenu onClick={() => setToggle(!toggle)}/>
                <div className={`sidebar-header-contents ${!toggle ? 'hide' : ''}`}>
                    <h3>On The Ball</h3>
                    <img src={otb}
                        alt="On The Ball"
                        className="sidebar-icon"
                    />
                </div>

                <div className="sidebar-content-wrapper">
                {sidebar.map((item, index) => {
                    return  (<div className="sidebar-item" key={index}>
                                <Link to={item.path} >{item.title}</Link>
                            </div>)
                })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
