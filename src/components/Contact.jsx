import React,{useRef} from 'react'
import '../Assets/css/Contact.css'
import {FiSend} from 'react-icons/fi'
import MediaQuery from 'react-responsive'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../Assets/css/DarkMood.css'

const Contact = () => {
    const form = useRef()

     const sendEmail = (e) => {
        e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID ,process.env.REACT_APP_YOUR_TEMPLATE_ID , form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
        .then(()=>{ alert("Your message has been sent successfully");e.target.reset()})
        .catch(()=>alert('Message has not been sent. Try again'))
     }
  return (
    <motion.div
      initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{
        duration:1,
     }}
      viewport={{ once: true }}
    >
            <section className="contact">
                <div className="contact__header">
                    <h1>Contact</h1>
                    <p>Let me know if you are Interested in my service or collaboration. <br />I will do well to respond as quick as possible
                    </p>
                </div>
                <div className="contact-form">
                    <form action="" className='form' ref={form} onSubmit={sendEmail}>
                        <div className="name">
                            <label htmlFor="">Name</label>
                            <input type="text" name='from_name' />
                        </div>
                        <div className="email">
                            <label htmlFor="">Email</label>
                            <input type="email" name="from_email" />
                        </div>
                        <div className="name">
                            <label htmlFor="">Subject</label>
                            <input type="text" name='reply_to' />
                        </div>
                        <div className="message">
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit'>
                            <FiSend />
                            <span>Send</span>
                        </button>
                    </form>
                </div>
    <MediaQuery minWidth={1200}>

                <div className="email_address">
                    <h1>Let's talk</h1>
                    <p>udonwajnr10@gmail.com</p>
                </div>
    </MediaQuery>
            </section>
    </motion.div>
  )
}

export default Contact