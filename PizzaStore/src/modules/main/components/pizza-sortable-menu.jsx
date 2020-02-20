import {Button} from 'reactstrap';
import React, {useState} from 'react';
import {pizzaList} from '../../../data/pizzaList';

const PizzaSortableMenu = ({pizzaArray, setPizzaArray}) => {

    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(1000);

    const liveSearch = (value) => {
        value
            ? setPizzaArray(pizzaArray.filter(pizza => pizza.name.toLowerCase().includes((value).toLowerCase())))
            : setPizzaArray([...pizzaList]);
    };
    const filter = (value) => {
        // eslint-disable-next-line array-callback-return
        const result = pizzaArray.sort((a, b) => {
            if (value === 'Цена: по возростанию') return a.price - b.price;
            if (value === 'Цена: по убыванию') return b.price - a.price;
            if (value === 'Калории: по возростанию') return a.caloricity - b.caloricity;
            if (value === 'Калории: по убыванию') return b.caloricity - a.caloricity;
        });
        value === 'Фильтр'
            ? setPizzaArray([...pizzaList])
            : setPizzaArray([...result]);
    };

    const searchByPriceRange = () =>
        !minPrice || !maxPrice
            ? setPizzaArray([...pizzaList])
            : setPizzaArray(pizzaArray.filter(pizza => pizza.price > minPrice && pizza.price < maxPrice));

    return(
        <section className="menu">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 justify-content-between mb-2">
                    <div className="live-search">
                        <input type="text"
                               className="ive-input form-control"
                               placeholder="Поиск"
                               onChange={(e) => liveSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-4 mb-2">
                    <div className="value-holder d-flex align-items-center">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="от"
                            onChange={(e) => setMinPrice(+e.target.value)}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="до"
                            onChange={(e) => setMaxPrice(+e.target.value)}
                        />
                        <Button className="range-finder btn-danger" onClick={searchByPriceRange}>Поиск</Button>
                    </div>
                </div>
                <div className="col col-md-3 col-lg-3 mb-2 d-flex align-items-center justify-content-end">
                    <select
                        className="btn btn-secondary"
                        onChange={(e) => filter(e.target.value)}>
                        <option>Фильтр</option>
                        <option>Цена: по возростанию</option>
                        <option>Цена: по убыванию</option>
                        <option>Калории: по возростанию</option>
                        <option>Калории: по убыванию</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default PizzaSortableMenu;