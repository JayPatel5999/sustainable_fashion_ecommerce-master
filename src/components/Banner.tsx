"use client";
import { Component } from 'react';
import Slider from 'react-slick';
import Banner1 from "../app/images/bannerone.jpg";
import Banner2 from "../app/images/bannertwo.jpg";
import Banner3 from "../app/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from 'next/image';

const Banner = () => {
        const NextArrow=(props:any)=>{
            const {onClick} = props;
            return(
                <div 
                onClick={onClick} 
                style={{
                    position: 'absolute',
                    top: '45%',
                    left: '20px',
                    cursor: 'pointer',
                    zIndex: 2002,
                }}>
                    <PiCaretLeftLight style={{ fontSize: '2rem', color: '#000' }}/>
                </div>
            );
        };
        const PrevArrow=(props:any)=>{
            const {onClick} = props;
            return(
                <div 
        onClick={onClick}
        style={{
                    position: 'absolute',
                    top: '45%',
                    right: '20px',
                    cursor: 'pointer',
                    zIndex: 2002,
                }}>
                    <PiCaretRightLight style={{ fontSize: '2rem', color: '#000' }}/>
                </div>
            );
        };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        slidetoShow: 1,
        slidetoScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }

    return (
        <div className='relative'  style={{ width: '100%', height: '390px' }}>
            <Slider {...settings}>
                <div  style={{ width: '100%', height: '100%' }}>
                    <Image src={Banner1} alt="Banner 1" layout='responsive' objectFit='scale-down'/>
                </div>
                <div  style={{ width: '100%', height: '100%' }}>
                    <Image src={Banner2} alt="Banner 2" layout='responsive' objectFit='scale-down'/>
                </div>
                <div  style={{ width: '100%', height: '100%' }}>
                    <Image src={Banner3} alt="Banner 3" layout='responsive' objectFit='scale-down'/>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
