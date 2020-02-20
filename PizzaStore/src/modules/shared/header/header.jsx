import React, {useState} from 'react';
import './header.scss';
import {Badge, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {PizzaCartModal} from '../../main/components/pizza-cart-modal';
import {pizzaList} from '../../../data/pizzaList';
import {PizzaLikedModal} from '../../main/components/pizza-liked-modal';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [cartModal, setCartModal] = useState(false);
    const toggleCart = () => setCartModal(!cartModal);

    const [likedModal, setLikedModal] = useState(false);
    const toggleLiked = () => setLikedModal(!likedModal);

    return (
        <header className="bg-danger">
            <div className="container py-4">
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
                                <PizzaLikedModal
                                    pizza={pizzaList}
                                    modal={likedModal}
                                    toggleCart={toggleLiked}
                                />
                                <NavLink href="#"
                                         onClick={toggleLiked}
                                >Избранное <Badge color={'primary'} className="liked">0</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <PizzaCartModal
                                    pizza={pizzaList}
                                    modal={cartModal}
                                    toggleCart={toggleCart}
                                />
                                <NavLink href="#" onClick={toggleCart}>Корзина <Badge color={'primary'} className="cart">0</Badge></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;