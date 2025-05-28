// src/pages/ContactPage.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Ensure this is installed: npm install @emailjs/browser
import AnimatedSection from '../components/AnimatedSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { Send, Linkedin, Github } from 'lucide-react'; // Ensure lucide-react is installed

// IMPORTANT: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
// You can find these in your EmailJS account dashboard.
// It's also good practice to move these to environment variables for better security later on.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; 
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const ContactPage = () => { 
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' }); // Reset status

    // Basic validation for EmailJS IDs
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus({ success: false, message: 'EmailJS not configured by the developer. Please update Service ID, Template ID, and Public Key in ContactPage.jsx.' });
      setIsSubmitting(false);
      // Scroll to status message if it exists
      const statusMessageElement = document.getElementById('statusMessage');
      if (statusMessageElement) {
          statusMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus({ success: true, message: 'Message sent successfully! I will get back to you soon.' });
          if (form.current) { // Check if form.current is not null
            form.current.reset(); // Reset form fields
          }
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus({ success: false, message: `Failed to send message. Error: ${error.text}. Please try again or contact me directly via email.` });
      })
      .finally(() => {
        setIsSubmitting(false);
        // Scroll to status message if it exists
        const statusMessageElement = document.getElementById('statusMessage');
        if (statusMessageElement) {
            statusMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12 flex flex-col items-center justify-center">
      <AnimatedSection className="w-full max-w-2xl">
        <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black tracking-tight">
            Contact Form
          </h2>
          <p className="text-center text-gray-600 mb-8">
            If you'd like to send a message through the website, please use the form below.
          </p>
          <form action="https://formspree.io/f/xdkgrrlz"
  method="POST" className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name" 
                required 
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-shadow" 
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email" 
                required 
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-shadow" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                required 
                className="w-full p-3 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-shadow"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? <LoadingSpinner /> : <><Send size={18} className="mr-2" /> Send Message</>}
              </button>
            </div>
          </form>
          {submitStatus.message && (
            <p 
              id="statusMessage" 
              className={`mt-6 text-center text-sm p-3 rounded-md 
                ${submitStatus.success === true ? 'bg-green-100 text-green-700 border border-green-300' 
                : submitStatus.success === false ? 'bg-red-100 text-red-700 border border-red-300' : 'hidden'}`}
            >
              {submitStatus.message}
            </p>
          )}
           <div className="mt-10 text-center">
              <p className="text-gray-600 mb-3">Or connect with me on:</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://linkedin.com/in/yourprofile" /* Replace yourprofile */
                  target="_blank" rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <Linkedin size={28}/>
                </a>
                <a 
                  href="https://github.com/yourusername" /* Replace yourusername */
                  target="_blank" rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <Github size={28}/>
                </a>
              </div>
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;