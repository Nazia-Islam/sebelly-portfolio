import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FcIcons.FcHome />,
        cName: 'nav-text'
    },
    {
        title: 'Project',
        path: '/project',
        icon: <FcIcons.FcBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/aboutme',
        icon: <FcIcons.FcBusinesswoman />,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaBlog />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FcIcons.FcContacts />,
        cName: 'nav-text'
    },
]

