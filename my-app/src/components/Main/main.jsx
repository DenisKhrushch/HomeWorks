import React from 'react';
import PizzaService from './menu';
// import Modal from './Modal';
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