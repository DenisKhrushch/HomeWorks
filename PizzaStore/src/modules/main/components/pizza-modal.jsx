import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export const PizzaModal = ({pizza, modal, openModal}) => {
    const closeBtn = <button className="close" onClick={openModal}>&times;</button>;

    return(
        <div>
            <Modal isOpen={modal} toggle={openModal}>
                <ModalHeader toggle={openModal} close={closeBtn}>{pizza.name}</ModalHeader>
                <ModalBody>
                    <h5>Ингридиенты: </h5> {pizza.composition.join(', ')}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Купить</Button>{' '}
                    <Button color="secondary" onClick={openModal}>Отмена</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};