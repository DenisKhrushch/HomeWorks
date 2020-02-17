import React, {useState} from 'react';
import { Button } from 'reactstrap';
import {pizzaList} from '../data/pizzaList';
import {createPiazzaArrayByClass} from '../data/pizzaList';
import PizzaCard from './PizzaCard';

const PizzaService = () => {
    const [pizzaArray, setPizzaArray] = useState([...createPiazzaArrayByClass(pizzaList)]);

    const liveSearch = (e) => {
        (e.target.value)
            ? setPizzaArray(pizzaArray.filter(pizza =>
                pizza.name.toLowerCase().includes((e.target.value).toLowerCase())))
            : setPizzaArray([...createPiazzaArrayByClass(pizzaList)]);
    };
    const filter = () => {
        const elem = document.querySelector('.filter');
        // eslint-disable-next-line array-callback-return
        const result = pizzaArray.sort((a, b) => {
            if (elem.value === 'Цена: по возростанию') return a.price - b.price;
            if (elem.value === 'Цена: по убыванию') return b.price - a.price;
            if (elem.value === 'Калории: по возростанию') return a.caloricity - b.caloricity;
            if (elem.value === 'Калории: по убыванию') return b.caloricity - a.caloricity;
        });
        elem.value === 'Фильтр'
            ? setPizzaArray([...createPiazzaArrayByClass(pizzaList)])
            : setPizzaArray([...result]);
    };
    const searchByPriceRange = () => {
        let min = document.querySelector('.min-value'),
            max = document.querySelector('.max-value');
            setPizzaArray(pizzaArray.filter(pizza => pizza.price > min.value && pizza.price < max.value));
    };

    return (
        <>
            <section className={'menu'}>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 justify-content-between mb-2">
                        <div className="live-search">
                            <input type="text" className={'live-input form-control'} placeholder={'Поиск'} onChange={liveSearch}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 mb-2">
                        <div className="value-holder d-flex align-items-center">
                            <input type="number" className={'min-value form-control'} placeholder={'от'}/>
                            <input type="number" className={'max-value form-control'} placeholder={'до'}/>
                            <Button className={'range-finder btn-danger'} onClick={searchByPriceRange}>Поиск</Button>
                        </div>
                    </div>
                    <div className="col col-md-3 col-lg-3 mb-2 d-flex align-items-center justify-content-end">
                        <select className={'btn btn-secondary filter'} onChange={filter}>
                            <option>Фильтр</option>
                            <option>Цена: по возростанию</option>
                            <option>Цена: по убыванию</option>
                            <option>Калории: по возростанию</option>
                            <option>Калории: по убыванию</option>
                        </select>
                    </div>
                </div>
            </section>
            <section className={'px-4 py-4 bg-light'}>
                <div className="row allPizza">
                    {pizzaArray.map(pizza => <PizzaCard pizza={pizza} key={`pizzaCard${pizza.id}`}/>)}
                </div>
            </section>
        </>
    );
};

export  default  PizzaService;