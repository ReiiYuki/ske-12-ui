import NavBar from 'components/nav/NavBar'
import NavGroup from 'components/nav/NavGroup'
import NavItem from 'components/nav/NavItem'
import React from 'react'

const Nav = () => (
	<NavBar>
		<NavGroup>
			<NavItem>Nav Item</NavItem>
		</NavGroup>
		<NavGroup>
			<NavItem isActive>
				<a>Active Item</a>
			</NavItem>
			<NavItem>Nav Item</NavItem>
			<NavItem>Nav Item</NavItem>
		</NavGroup>
	</NavBar>
)

export default Nav
