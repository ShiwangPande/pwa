import React from "react";
import profile from "./img/profile.jpg";
import nogo9 from "./img/ngo9.jpg";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
import { Card, Col, Text } from "@nextui-org/react";

export default function Profilecard2() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <h2 class="my-4 mx-auto text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-rose-300 font-semibold">   About Ekaansh</span>
            </h2>
            <div class="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48  md:rounded-none md:rounded-l-lg border-8 drop-shadow-2xl border-double  border-black"
                    src={nogo9}
                    alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <span className="text-rose-300 font-semibold"> Ekaansh </span> is a non-profit organization started by Devyanee Dalmia
                        that focuses on providing vocational and STEAM (Science,
                        Technology, Engineering, Arts, and Mathematics) education to
                        students. Their mission is to empower young individuals by
                        equipping them with essential skills and knowledge to thrive in
                        today's rapidly evolving world.
                    </p>
                    {/* button */}
                    <div class="flex items-center justify-between" className="m-auto">
                        <Button auto shadow onPress={handler} >
                            Read more
                        </Button>
                        <div>
                            <Modal
                                closeButton
                                // scroll
                                blur
                                width="800px"
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                                open={visible}
                                onClose={closeHandler}
                            >
                                <div className='event_modal'>
                                    <Image
                                        showSkeleton
                                        src={nogo9}
                                        width={1000}
                                        height={490}


                                    />
                                    <div>
                                        <Modal.Header>
                                            <Text id="modal-title" className='font-black' size={18}>
                                                <span className="text-rose-300 font-semibold">   Ekaansh</span>
                                            </Text>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Text id="modal-description" >

                                                <p className='font-semibold'>   Ekaansh is a non-profit organization started by Devyanee Dalmia
                                                    that focuses on providing vocational and STEAM (Science,
                                                    Technology, Engineering, Arts, and Mathematics) education to
                                                    students. Their mission is to empower young individuals by
                                                    equipping them with essential skills and knowledge to thrive in
                                                    today's rapidly evolving world. Through their programs, Ekaansh
                                                    aims to bridge the gap between traditional education and practical
                                                    skills required for employment and entrepreneurship. By offering
                                                    vocational training and STEAM education, Ekaansh aims to create
                                                    opportunities for students to develop critical thinking,
                                                    problem-solving, and creativity while fostering a passion for
                                                    learning and innovation. Ekaansh hosted India's 1st 24-hour
                                                    fundraiser which held activities round-the-clock with eminent
                                                    names like Ayush Kumar, Trupti Mukker, Akhil Mehra, and more.
                                                    Ekaansh has donated over Rs. 1,20,000, donated 2,500+ books, 600+
                                                    clothes, 600+ sanitary napkins, stitching supplies, and more in
                                                    the 2 years of its running. They have also hosted various classes
                                                    on stitching and STEAM in different NGOs. Ekaansh also runs the Ek
                                                    Start podcast which has held conversions on different topics with
                                                    renowned names like Avanti Nagral, Nikhil Taneja, Prachi
                                                    Pratap, and more</p>

                                            </Text>
                                        </Modal.Body>
                                        <Modal.Footer className='mt-10 mr-5'>
                                            <Button auto flat >
                                                learn more
                                            </Button>

                                        </Modal.Footer>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
