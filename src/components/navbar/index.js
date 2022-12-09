import React from 'react';
import {
Nav,
NavLink,
NavMenu,
Bars,
} from './navbarComponents';

const uiuxProjects = [
    {
        name: 'Personas and Storyboarding',
        description: 'Exploring the mind and mentality of the user through observations and interviews',
        url: '/personas',
    },
    {
        name: 'Responsive Redesign',
        description: 'Redesigning an existing website to be more user-friendly, accessible, and usable across platforms',
        url: '/responsive',
    },
    {
        name: 'Development', 
        description: 'Developing an interactive website using ReactJS',
        url: '/development',
    },
]

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars/>
		<NavMenu>
        <NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/uiux'>
			UIUX
		</NavLink>
		<NavLink to='/dance'>
			Dance
		</NavLink>
		<NavLink to='/art'>
			Art
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
