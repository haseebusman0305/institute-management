import React from 'react'; 
import LocateIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Button, TextField, TextareaAutosize } from '@mui/material';

const ContactPage = () => {
  return (
    <div className="w-full">
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <video className="w-full h-full object-cover opacity-50" autoPlay loop muted>
          <source src="/campus-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-3xl">
            We&apos;re here to answer your questions and help you find the right program for your educational needs.
          </p>
        </div>
      </section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-16 lg:py-20">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField type="text" id="name" label="Name" variant="outlined" fullWidth />
              <TextField type="email" id="email" label="Email" variant="outlined" fullWidth />
            </div>
            <TextField type="text" id="subject" label="Subject" variant="outlined" fullWidth />
            <TextareaAutosize
              id="message"
              minRows={5}
              placeholder="Message"
              style={{ width: '100%', padding: '10px', borderColor: '#c4c4c4', borderRadius: '4px' }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#333', color: '#fff' }}
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start">
              <LocateIcon className="text-gray-500 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-500">123 Main Street, Anytown USA 12345</p>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon className="text-gray-500 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-500">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start">
              <EmailIcon className="text-gray-500 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-500">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full items-center flex justify-center mb-3'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.7698837221337!2d72.64052677537268!3d30.724868974588045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392321f4c87fdff5%3A0xbeb25fee0e4c6ca6!2sSS%20Science%20Academy!5e0!3m2!1sen!2s!4v1717879697527!5m2!1sen!2s"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    </div>
  );
};

export default ContactPage;
