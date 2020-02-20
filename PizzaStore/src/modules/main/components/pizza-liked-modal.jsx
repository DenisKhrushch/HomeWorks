import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {likedArray} from './pizza-card';
import {LikedPizzaCard} from './liked-pizza-card';

export const PizzaLikedModal = ({pizza, modal, toggleLiked}) => {

    const closeBtn = <button className="close" onClick={toggleLiked}>&times;</button>;

    return (
        <div>
            <Modal isOpen={modal} toggle={toggleLiked}>
                <ModalHeader toggle={toggleLiked} close={closeBtn}>Избранное</ModalHeader>
                <ModalBody>
                    {likedArray.map(pizza => <LikedPizzaCard pizza={pizza} key={`pizzaCard${pizza.id}`}/>)}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleLiked}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggleLiked}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};