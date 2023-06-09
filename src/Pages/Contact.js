
import Navbar from '../Components/Navbar'
import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
function Contact() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");


  const sendEmail = async (e) => {
    e.preventDefault();


    setShow(true);
    setEmail("")
    console.log("Email sent")

  }


  return (
    <>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible className='m-auto text-white text-center bg-green-500 text-2xl my-5 '>
          Your Message Succesfully Send!
        </Alert> : ""
      }

      <div className='m-auto'>

        <div className="w-100">
          <div class="text-center my-5">

            <h2>Get in touch</h2>
            <p class="lead">Questions? Do not hesitate to contact us.</p>
          </div>
          <div class="row justify-center my-5">
            <div class="w-[80%] m-auto">
              <form
                action="https://formsubmit.co/ekaanshfoundation@gmail.com"
                method="POST"
              >
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                      First Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Last Name
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      E-mail
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />

                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                      Message
                    </label>
                    <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3">
                    <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="sumbit">
                      Send
                    </button>
                    <input type="hidden" name="_next"
                      value="https://ekstepthankyou.vercel.app/" />
                  </div>
                  <div class="md:w-2/3"></div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact