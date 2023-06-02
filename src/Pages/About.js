import React from "react";
import "./about.css";
import Coursel from "./Coursel";
import Profilecard from "./Profilecard";
import Profilecard2 from "./Profilecard2";
function About() {
    return (
        <div className="">

            <h1 className="text-4xl font-bold text-center my-5" >About Us</h1>
            <Coursel />

            <div>
                {/* write content for about us */}

                <div className="flex justify-center mt-4">
                    <div className="lg:w-[40%] m-auto">
                        <div className="flex flex-col gap-9">
                            <Profilecard2 />
                            <Profilecard />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
