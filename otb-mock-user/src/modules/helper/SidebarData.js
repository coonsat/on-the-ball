import React from 'react';

const labels = [
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

export const sidebarData = 
    [
        {
            title: labels[0],
            path: `/${transform(labels[0])}`,
        },
        {
            title: labels[1],
            path: `/${transform(labels[1])}`,
        },
        {
            title: labels[2],
            path: `/${transform(labels[2])}`,
        },
        {
            title: labels[3],
            path: `/${transform(labels[3])}`,
        },
        {
            title: labels[4],
            path: `/${transform(labels[4])}`,
        },
        {
            title: labels[5],
            path: `/${transform(labels[5])}`,
        }
    ];