import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'data-aos="zoom-in-up">Get In Touch</h2>
            <p className='text-black text-[18px] pt-2'data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <IoIosMail size={30} /> bilawalakber56@gmail.com
            </div>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <BsFillTelephoneInboundFill size={30} /> +92-332-9996160
            </div>
        </div>
        <div className='space-y-8'data-aos="zoom-in-up">
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='E-mail'>E-mail</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='E-mail'/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='message'>Message</label>
                <textarea className='bg-transparent border border-accent'
                id='message'rows={5}>
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6'data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact