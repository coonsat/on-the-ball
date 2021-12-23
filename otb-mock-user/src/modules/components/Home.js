import React from 'react';
import { Link } from 'react-router-dom';

// internal import
import { menuData } from '../helper/menu';
// import { sidebarData } from '../helper/SidebarData';


// temp import
import testImage from '../resources/cc_3.jpg';
import Logo from '../resources/Logo.png';

const Home = () => {

    //use effect to get images

    return (
        <div className="home-container">
            <div className="menu-container">
                <div className="menu-header">
                    MTB
                </div>

                <div className="menu-contents">
                    <h2>Menu -</h2><br />
                    {menuData.map((item, index) => 
                        <Link to={`/#${item.path}`} key={index} className="nav-links">
                            <h2>{item.title}</h2>
                            <p>0{index + 1}</p>
                            <br />
                        </Link>)
                    }
                </div>

                <div className="menu-footer">
                    <img src={Logo} className="company-logo"/>
                    <div className="column-first">
                        FAQ <br />
                        Impressum
                    </div>
                    <div className="column-second">
                        Contact <br />
                        Terms
                    </div>
                </div>

            </div>

            <div className="gallery-container">
                <img src={testImage} className="gallery-image"/>
            </div>

        </div>
    )
}

export default Home;
