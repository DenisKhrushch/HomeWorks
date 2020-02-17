import React from 'react';
import PizzaService from '../PizzaService';

const Main = () => {
  return (
      <main>
          <div className="container">
              {PizzaService()}
          </div>
      </main>
  );
};

export default Main;