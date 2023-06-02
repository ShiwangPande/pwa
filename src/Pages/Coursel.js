import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ngo1 from './img/ngo1.jpg'
import Ngo2 from './img/ngo2.jpg'
import Ngo3 from './img/ngo3.jpg'
import Ngo4 from './img/ngo4.jpg'
import Ngo5 from './img/ngo5.jpg'
import Ngo6 from './img/ngo6.jpg'
import Ngo7 from './img/ngo7.jpg'
import Ngo8 from './img/ngo8.jpg'
import Ngo9 from './img/ngo9.jpg'
import Ngo10 from './img/ngo10.jpg'
import Ngo11 from './img/ngo11.jpg'
function Coursel() {
    return (
        <div >



            <Carousel autoPlay className=''>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo1} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo2} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo3} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo4} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo5} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo6} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo7} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo8} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo9} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo10} />

                </div>
                <div className='lg:w-[35%]  m-auto' >
                    <img alt="" src={Ngo11} />

                </div>

            </Carousel>

        </div>
    )
}

export default Coursel