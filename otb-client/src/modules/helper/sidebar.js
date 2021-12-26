import * as RiIcons from 'react-icons/ai';

const labels = [
    ["Home", <RiIcons.AiFillHome />],
    ["Schedule", <RiIcons.AiTwotoneCalendar />],
    ["Contracts", <RiIcons.AiFillFilePdf />],
    ["Content", <RiIcons.AiOutlineGlobal />],
    ["Reports", <RiIcons.AiFillFolderAdd />],
    ["Invoicing", <RiIcons.AiFillDollarCircle />],
    ["Notification", <RiIcons.AiFillMail />],
    ["Settings", <RiIcons.AiFillSetting />]
]

// replace space with -
// make all letters lower case
const transform = (path) => {
    return path.replace(/\ /g,'-')
               .replace(/[A-Z]/g, function(match) {
                   return match.toLowerCase();
               });
};

// prepare data for sidebar
export const sidebar = labels.map(item => {
    return { title: item[0], path: `/${transform(item[0])}`, icon: item[1]}
});