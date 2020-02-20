import React, {useState} from 'react';
import {pizzaList} from '../../data/pizzaList';
import PizzaSortableMenu from './components/pizza-sortable-menu';
import PizzaCard from './components/pizza-card';

const Main = () => {
    const [pizzaArray, setPizzaArray] = useState([...pizzaList]);

    return (
        <main>
            <div className="container">
                <PizzaSortableMenu
                    pizzaArray={pizzaArray}
                    setPizzaArray={(data) => setPizzaArray(data)}
                />

                <section className={'px-4 py-4 bg-light'}>
                    <div className="row allPizza">
                        {pizzaArray.map(pizza => <PizzaCard pizza={pizza} key={`pizzaCard${pizza.id}`}/>)}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Main;