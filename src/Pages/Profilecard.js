import React from "react";
import profile from "./img/profile.jpg";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
import { Card, Col, Text } from "@nextui-org/react";
export default function Profilecard() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <h2 class="my-4 mx-auto text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-rose-300 font-semibold">
                    {" "}
                    About Devyanee Dalmia
                </span>
            </h2>
            <div
                href="#"
                class="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <img
                    class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg border-8 drop-shadow-2xl border-double  border-black"
                    src={profile}
                    alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <p class="mb-3 text-gray-700 dark:text-gray-400">
                        <span className="text-rose-300 font-semibold">
                            {" "}
                            Devyanee Dalmia
                        </span>{" "}
                        is a 15 year old student at Modern High School for Girls’. She is passionate about human rights and youth activism in any form possible and to that end she has started an organization called 'Ekaansh Foundation' which aims to provide vocational training to underprivileged children. She is also the co-founder and president of a Girl Up chapter (UN Foundation) and Leo Club of Kolkata South. She has been featured in notable newspapers like Sanmarg. She enjoys arts and design and essentially anything STEM related. She constantly wishes to expand her horizons with an iced tea in her left hand and cause in the right one
                    </p>
                    {/* button */}
                    <div class="flex items-center justify-between m-auto">
                        <Button auto shadow onPress={handler}>
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
                                <div className="event_modal">
                                    <Image showSkeleton src={profile} width={1000} height={490} />
                                    <div>
                                        <Modal.Header>
                                            <Text id="modal-title" className="font-black" size={18}>
                                                <span className="text-rose-300 font-semibold">
                                                    {" "}
                                                    Devyanee Dalmia
                                                </span>
                                            </Text>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Text id="modal-description">
                                                <p className="font-semibold">

                                                    <span className="text-rose-300 font-semibold">
                                                        {" "}
                                                        Devyanee Dalmia
                                                    </span>{" "}
                                                    is a 15 year old student at Modern High School for Girls’. She is passionate about human rights and youth activism in any form possible and to that end she has started an organization called 'Ekaansh Foundation' which aims to provide vocational training to underprivileged children. She is also the co-founder and president of a Girl Up chapter (UN Foundation) and Leo Club of Kolkata South. She has been featured in notable newspapers like Sanmarg. She enjoys arts and design and essentially anything STEM related. She constantly wishes to expand her horizons with an iced tea in her left hand and cause in the right one
                                                </p>
                                            </Text>
                                        </Modal.Body>
                                        <Modal.Footer className="mt-10 mr-5">
                                            <a href="https://www.linkedin.com/in/devyanee-dalmia-a515291ba">
                                                <Button auto flat>
                                                    learn more
                                                </Button></a>
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
