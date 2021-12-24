const labels = [
    "Home",
    "Schedule",
    "Contracts",
    "Content",
    "Reports",
    "Invoicing",
    "Notification",
    "Settings"
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
    return { title: item, path: `/${transform(item)}`}
});