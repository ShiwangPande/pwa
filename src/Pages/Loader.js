import React from 'react'
import './loader.css'
import log0 from "../Components/Etstep.png"
function loader() {
    return (
        <div> <div id="background"></div>
            <div id="logocontainer">
                <div id="pelogo">
                    <img src={log0} alt="logo" />
                </div>
                <div class="loader" style={{ left: "2vh", top: "0", height: "2vh", width: "0", animation: "slide1 1s linear forwards infinite" }}></div>
                <div class="loader" style={{ right: "0", top: "2vh", width: "2vh", height: "0", animation: "slide2 1s linear forwards infinite", animationDelay: "0.5s" }}></div>
                <div class="loader" style={{ right: "2vh", bottom: "0", height: "2vh", width: "0", animation: "slide3 1s linear forwards infinite" }}></div>
                <div class="loader" style={{ left: "0", bottom: "2vh", width: "2vh", height: "0", animation: "slide4 1s linear forwards infinite", animationDelay: "0.5s" }}></div>
            </div>
            {/* write below from meta */}
            <div className='text-black w-screen z-10 absolute bottom-8 text-center mx-auto'>
                <span className='text-gray-400 text-lg font-bold'>By</span>  <br /> <span className='text-xl font-semibold'>Devyanee Dalmia</span>
            </div>
        </div >
    )
}

export default loader