import React, {useState} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, Badge} from 'reactstrap';
import {PizzaModal} from './pizza-modal';

export let likedArray = [];
export let cartArray = [];

const PizzaCard = ({pizza}) => {

    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);

    const isFavourite = () => {
        pizza.isFavourite = !pizza.isFavourite;
        pizza.isFavourite
            ? likedArray.push(pizza)
            : likedArray.splice(likedArray.indexOf(pizza), 1);
        document.querySelector('.liked').innerText = `${likedArray.length}`;
    };
    const buy = () => {
        pizza.toCart = true;
        pizza.toCart
            ? cartArray.push(pizza)
            : cartArray.splice(cartArray.indexOf(pizza), 1);
        document.querySelector('.cart').innerText = `${cartArray.length}`;
        openModal();
    };

    return (
        <>
            <div className={'col-12 col-sm-12 col-md-6 col-lg-4'}>
                <Card className="pizza-card">
                    <PizzaModal
                        pizza={pizza}
                        modal={modal}
                        openModal={openModal}
                        buy={buy}
                    />
                    <input
                        type="checkbox"
                        id={'like' + pizza.id}
                        className="like"
                        onChange={isFavourite}/>
                    <Badge color="success">{pizza.caloricity + ' kcal'}</Badge>
                    <CardImg top width="100%" src={'./images/' + pizza.img + '.jpg'} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag={'h3'}>{pizza.name}</CardTitle>
                        <CardText>{pizza.composition.join(', ')}</CardText>
                        <div className="button-price-holder">
                            <Button color="danger" onClick={openModal}>В Корзину</Button>
                            <h3>{pizza.price + '\u20B4'}</h3>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default PizzaCard;