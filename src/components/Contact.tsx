import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-24 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Ready to build your new PC or need a fix? Send me a message and I'll get back to you with a quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg text-blue-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-slate-400">ivo@turbopc.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-lg text-blue-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-medium">Service Area</h4>
                <p className="text-slate-400">Split, Croatia & Surrounding Areas</p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 mt-8">
              <p className="text-slate-300 italic">
                "I treat every PC build as if it were my own personal machine. Quality and cable management are guaranteed."
              </p>
            </div>
          </div>

          <form className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="I need a gaming PC for around €1000..."
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;