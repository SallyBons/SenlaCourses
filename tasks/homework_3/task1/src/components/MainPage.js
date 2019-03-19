import React from 'react';
import PropTypes from 'prop-types';

const MainPage = ({ name, isCat, isGoodWeather }) => {
    return (
        <div className="MainPage-wrapper">
            <h1>Hello, my name is {name}</h1>
            {isCat ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Karin_Maine_Coon.jpg/266px-Karin_Maine_Coon.jpg" alt="oops!"></img>
                : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Racib%C3%B3rz_2007_082.jpg/267px-Racib%C3%B3rz_2007_082.jpg" alt="oops!"></img>}
            {isGoodWeather && <h2>Weather is fine today</h2>}
        </div>
    )
}

MainPage.propTypes = {
    name: PropTypes.string.isRequired,
    isCat: PropTypes.bool.isRequired,
    isGoodWeather: PropTypes.bool
}

MainPage.defaultProps = {
    name: 'Anastasia'
}

export default MainPage;