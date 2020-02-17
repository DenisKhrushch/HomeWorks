import React from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
// import Modal from './components/Modal';
const App = () => {
    return (
        <>
            {Header()}
            {Main()}
            {Footer()}
        </>
  );
};

export default App;