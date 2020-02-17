import React from 'react';
import Navigation from '../navbar';

const Header = () => {
    return (
        <header className={'bg-danger'}>
            <div className="container py-4">
                {Navigation()}
            </div>
        </header>
    );
};

export default Header;