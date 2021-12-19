import React from 'react';
import { Link } from 'react-router-dom';

// internal import
import { sidebarData } from '../helper/SidebarData';

const Home = () => {

    //use effect to get images

    return (
        <div className="home-container">
            <div className="menu-container">
                <div className="menu-header">
                    logo menu header
                </div>

                <div className="menu-contents">
                    {sidebarData.map((item, index) => 
                        <Link to={`/${item.path}`} key={index}>
                            <h2>{item.title}</h2>
                            <p>{index + 1}</p>
                            <br />
                        </Link>)}
                </div>

                <div className="menu-footer">
                    menu footer
                </div>

            </div>

            <div className="gallery-container">
                Image gallery
            </div>

        </div>
    )
}

export default Home;
