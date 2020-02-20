import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {cartArray} from './pizza-card';
import {CartPizzaCard} from './cart-pizza-card';

export const PizzaCartModal = ({pizza, modal, toggleCart}) => {

    const closeBtn = <button className="close" onClick={toggleCart}>&times;</button>;

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleCart}>
                <ModalHeader toggle={toggleCart} close={closeBtn}>Корзина</ModalHeader>
                <ModalBody>
                    {cartArray.map(pizza => <CartPizzaCard pizza={pizza} key={`pizzaCard${pizza.id}`}/>)}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleCart}>Оформить заказ</Button>{' '}
                    <Button color="secondary" onClick={toggleCart}>Вернуться к покупкам</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};