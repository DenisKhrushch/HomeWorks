import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className={'rounded'}>
                <NavLink href={'#'}>
                    <img src="./images/logo.png" alt="logo"/>
                </NavLink>
                <h1 className={'text-success'}>Ninja Pizza</h1>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Пицца</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Напитки</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Избранное</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Корзина</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;