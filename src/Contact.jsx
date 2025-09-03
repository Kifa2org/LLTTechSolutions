import React,{useState} from 'react';
import { motion , AnimatePresence } from 'framer-motion';

const Contact = () => {

  const data ={
    name:"",
    email:'',
    subject:'',
    message:''
  }

  const [mydata,setmydata]=useState(data);

  const handile =(e,name)=>{
let dataval = e.target.value || "";
let strname = name;
setmydata({...mydata,[strname]:dataval})
}
  const [status, setStatus] = useState(false);
const handilesub = (e)=>{
  e.preventDefault();
// const formData = new FormData(mydata);

fetch("http://localhost/EmailBackend/ZEmailSend.php", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(mydata)
})
.then(response => {
  console.log(response);
  
  // Check if the response is successful and has a JSON content type
  const contentType = response.headers.get('content-type');
  if (!response.ok) {
    // If the response is not ok, parse the text to see the error message
    return response.text().then(text => {
      throw new Error(`Server error: ${response.status} - ${text}`);
    });
  }
  
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  } else {
    // If the response is not JSON, parse it as text and handle it
    return response.text().then(text => {
      console.warn("Received non-JSON response:", text);
      return {}; // Return an empty object or handle as needed
    });
  }
})
.then(data => {
  console.log("Success:", data);
})
.catch(error => {
  // This will catch network errors or errors thrown in the .then() block
  console.error("Fetch error:", error);
});
  

setmydata(data)
 setStatus(true);

    // reset after some time
    setTimeout(() => setStatus(false), 2500);
  console.log(mydata);
  

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
           onSubmit={handilesub}
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
              onChange={(e)=>handile(e,'name')}

              value={mydata.name}
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
              onChange={(e)=>handile(e,'email')}
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
              onChange={(e)=>handile(e,'subject')}
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
              onChange={(e)=>handile(e,'message')}
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
              <p className="text-sm">contact@llttechsolutions.com</p>
            </div>
            <div className="bg-gray-800/30 hover:bg-gray-600 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-sm">+91 78458 25295</p>
            </div>
            <div className="bg-gray-800/30 hover:bg-gray-600 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-sm"> Palakkad Main Road,Sunnambu,Kalavai
          Kuniyamuthur, Coimbatore-641008, Tamil Nadu</p>
             
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
