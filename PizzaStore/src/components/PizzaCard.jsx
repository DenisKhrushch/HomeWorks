import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

const PizzaCard = (props) => {
    return (
        <div className={'col-12 col-sm-12 col-md-6 col-lg-4'}>
            <Card>
                <CardImg top width="100%" src={'./images/' + props.pizza.img + '.jpg'} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag={'h3'}>{props.pizza.name}</CardTitle>
                    <CardText>{props.pizza.composition.join(', ')}</CardText>
                    <div className="button-price-holder">
                        <Button color="danger">Купить</Button>
                        <h3>{props.pizza.price + '\u20B4'}</h3>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default PizzaCard;