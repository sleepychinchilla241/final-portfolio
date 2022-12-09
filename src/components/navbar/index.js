import React from 'react';
import {
Nav,
NavLink,
NavMenu,
Bars,
} from './navbarComponents';

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
