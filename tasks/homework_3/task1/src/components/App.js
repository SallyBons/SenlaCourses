import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainPage from './MainPage';

const App = () => (
    <div>
        <Header
        />
        <MainPage
            name="Anastasia"
            isCat={true}
            isGoodWeather={true}
        />
        <Footer
        />

    </div>
);

export default App;