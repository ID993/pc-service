import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© 2025 TurboPC. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;