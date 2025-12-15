import { Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <Cpu className="text-blue-500 w-6 h-6 group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold text-white tracking-wider group-hover:text-blue-100 transition-colors">
              IvoPC
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
