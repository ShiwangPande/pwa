import React, { useState } from 'react';
import excel from "./img/excel.webp"
import "./mug.css"
import Confetti from 'react-confetti';
import cele from "./img/firework.webp"
import ReactPlayer from 'react-player';
const CoursePage = () => {
    const [videoCompleted, setVideoCompleted] = useState(false);
    const handleVideoComplete = () => {
        setVideoCompleted(true);
    };







    return (
        <div>
            <div className='flex justify-center'>
                <img className='h-20 w-20' src={excel} alt="logo" />
            </div>
            <h1 className='text-center text-2xl font-bold my-5 text-rose-300'>  Welcome to  Basics of Excel</h1>
            {/* watch below video to get certificate  */}



            <ReactPlayer className='course_video '
                width="90%"
                height="30rem"
                url="https://www.youtube.com/embed/f2kvQtHOG24"
                controls
                onEnded={handleVideoComplete}
            />

<div className='flex flex-col gap-2 justify-center items-center'>
                <p className='mx-5 text-xs font-bold my-5 normal-case italic'>Unmish has computer training courses for special children. Support them by donating"
                    Hope foundation provides stitching courses to underprivileged women. help them by donating
                </p>
                <a href="https://www.unmish.org/about-us/donations/">  <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 m-auto">
                    Donate
                </button></a>
            </div>
            {videoCompleted && (
                <><Confetti />

                    <div className='my-7 text-center'>
                        <p className='text-2xl'>Video completed! Click the button to Give Assessment.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_MFduXqhwp6lxMtwCMnQst6luKp_hTTPOb_Rhj00NXnq3cw/viewform?usp=sf_link">  <button class="my-5 inline-flex px-5 py-3 text-lg text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800" >Assessment</button></a>

                    </div>
                    <div id="toast-message-cta" class="w-full max-w-lg p-4  absolute top-48 lg:inset-x-[30rem] inset-x-[0rem] z-10 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
                        <div class="flex">
                            <img class="w-8 h-8 rounded-full shadow-lg" src={cele} alt="Jese Leos image" />
                            <div class="ml-3 font-sans">
                                <span class="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Congratulations!</span>
                                <div class="my-2 text-base font-normal">You have completed this course and are now eligible to give the assessment and get a certificate.</div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_MFduXqhwp6lxMtwCMnQst6luKp_hTTPOb_Rhj00NXnq3cw/viewform?usp=sf_link" class="inline-flex px-2.5 py-1.5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Click to give assessment</a>
                            </div>
                            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>

                </>
            )}

            {/* Add this line to the root component to initialize the toast container */}
        </div>
    );
};

export default CoursePage;

