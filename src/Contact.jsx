import React,{useState} from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

  const Contact = () => {

  const data ={
    name:"",
    phone:"",
    email:'',
    subject:'',
    message:''
  }

  const [mydata,setmydata]=useState(data);

  const handle =(e,name)=> {
    let dataval = e.target.value || "";
    let strname = name;
    setmydata({...mydata,[strname]:dataval})
  }
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_zjrr0bn';
        const templateId = 'template_hbj3r2b';
        const publicKey = 'V2VbEXWAcnrUQLNJj';

        // Create a new object that contains dynamic template params
        const templateParams = {
          name: mydata.name,
          email: mydata.email,
          phone: mydata.phone,
          message: mydata.message,
          subject: mydata.subject,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            console.log('Email sent successfully!', response);

            setmydata(data)
            setStatus(true);
            setTimeout(() => setStatus(false), 2500);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      }

  return (
  <>
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our expert team. We're here to help you elevate your cybersecurity and technology solutions.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-2xl"
           onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-semibold mb-3" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              onChange={(e)=>handle(e,'name')}

              value={mydata.name}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-semibold mb-3" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              onChange={(e)=>handle(e,'phone')}

              value={mydata.phone}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-semibold mb-3" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              onChange={(e)=>handle(e,'email')}
              value={mydata.email}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-semibold mb-3" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="What's this about?"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
              required
              onChange={(e)=>handle(e,'subject')}
              value={mydata.subject}
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-200 text-sm font-semibold mb-3" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell us more about your requirements or questions..."
              rows="5"
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
              required
              onChange={(e)=>handle(e,'message')}
              value={mydata.message}
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
            >
              Send Message
            </motion.button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white text-sm fw-lg">
              We'll get back to you within 24 hours
            </p>
          </div>
        </motion.form>

      </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-gray-800/30 hover:bg-gray-600 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
                 <a href="mailto:contact@llttechsolutions.com"
                    className="hover:text-white transition-colors"
                 >
                    contact@llttechsolutions.com
                 </a>
            </div>
            <div className="bg-gray-800/30 hover:bg-gray-600 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+917845825295"
                 className="hover:text-white transition-colors cursor-pointer">
                 +91 78458 25295
              </a>
            </div>
            <div className="bg-gray-800/30 hover:bg-gray-600 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-sm"> Palakkad Main Road,Sunnambu,Kalavai
                 Kuniyamuthur, Coimbatore-641008, Tamil Nadu
              </p>
             
            </div>
          </div>
        </motion.div>
     <AnimatePresence>
          {status && (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.9 }}
              className={`absolute inset-0 flex items-center justify-center bg-white mt-4 text-center font-medium 
               success text-green-600 text-2xl
              }`}
            >
             
                 ✅ Form submitted successfully!
                
            </motion.div>
          )}
        </AnimatePresence>
    </section>

        </>
  );
};

export default Contact;
