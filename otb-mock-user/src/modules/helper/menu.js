// component import
import Home from '../components/Home';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Events from '../components/Events';
import Blog from '../components/Blog';


const components = [
    "Home",
    "About Us",
    "Our Team",
    "Schedule",
    "Philosophy",
    "Events",
    "Blog"
];

const transform = (path) => {
    return path.replace(/\ /g,'-')
               .replace(/[A-Z]/g, function(match) {
                   return match.toLowerCase();
               });
};

export const menuData = 
    [
        {
            title: components[0],
            path: `${transform(components[0])}`,
            // component: <Home />
        },
        {
            title: components[1],
            path: `${transform(components[1])}`,
            // component: <About />
        },
        {
            title: components[2],
            path: `${transform(components[2])}`,
            // component: <Schedule />
        },
        {
            title: components[3],
            path: `${transform(components[3])}`,
            // component: <Events />
        },
        {
            title: components[4],
            path: `${transform(components[4])}`,
            // component: <Blog />
        },
        {
            title: components[5],
            path: `${transform(components[5])}`,
            // component: <Blog />
        },
        {
            title: components[6],
            path: `${transform(components[6])}`,
            // component: <Blog />
        }
    ];