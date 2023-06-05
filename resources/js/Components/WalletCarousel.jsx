import React, { useState } from 'react';

const Carousel = (props) => {

    // const teamWallet = props.sumTeamCoins;
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'PERSONAL',
            image: '../coin.png',
            text: props.personalWallet,
        },
        {
            title: 'TEAM',
            image: '../coin.png',
            text: props.teamWallet,
        },
    ];

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className='walletCarousel'>
            <h1 className='titleWallet'>{slides[currentSlide].title}</h1>
            <div className='carousel'>
                <img src={slides[currentSlide].image} alt="Slide" className='coinCarousel' />
                <p className='amount'>{slides[currentSlide].text}</p>

            </div>
            <button className="carouselButton" onClick={handleNext}>next &gt; &gt;</button>
        </div>
    );
};

export default Carousel;