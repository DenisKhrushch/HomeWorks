import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

export const CartPizzaCard = ({pizza}) => {
    return (
        <div>
            <Card>
                {/*<CardImg top width="100%" src={'./images/' + pizza.img + '.jpg'} alt="Card image cap" />*/}
                <CardBody>
                    <CardTitle tag={'h3'}>{pizza.name}</CardTitle>
                    <CardText>{pizza.composition.join(', ')}</CardText>
                    <div className="button-price-holder">
                        <Button color="warning">Удалить</Button>
                        <h3>{pizza.price + '\u20B4'}</h3>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};