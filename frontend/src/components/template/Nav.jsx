import './Nav.css'
import React from 'react'
import NavItem from './Nav-item'

export default props =>
    <aside className="menu-area mt-1">
        <nav className="menu">
            <NavItem href="/" icon="home" content="Home"/>
            <NavItem href="/users" icon="users" content="Usuários"/>
        </nav>
    </aside>