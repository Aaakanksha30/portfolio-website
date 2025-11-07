import { useState } from 'react';
import { Menu } from 'lucide-react';
import WebPic from '../WEB_PIC.jpeg';

// Open the Drive 'view' link so the resume opens in a new tab instead of forcing download
const RESUME_VIEW = 'https://drive.google.com/file/d/1IfUGL5zKh6FtA4Enwa4Y2hPaBGF1-mUA/view?usp=sharing';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-slate-900/60 backdrop-blur-md border-b border-slate-700/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img src={WebPic} alt="Akanksha" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold">Akanksha Singh</div>
              <div className="text-xs text-slate-400">Software Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-slate-200 hover:text-blue-400">Home</a>
            <a href="#about" className="text-slate-200 hover:text-blue-400">About</a>
            <a href="#education" className="text-slate-200 hover:text-blue-400">Education</a>
            <a href="#skills" className="text-slate-200 hover:text-blue-400">Skills</a>
            <a href="#contact" className="text-slate-200 hover:text-blue-400">Contact</a>
            <a href={RESUME_VIEW} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600">View Resume</a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(o => !o)}
              className="p-2 rounded-md bg-slate-800/60 hover:bg-slate-800/80"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-slate-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
          {open && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-700/40">
          <div className="px-4 py-3 space-y-2">
            <a href="#home" className="block text-slate-200">Home</a>
            <a href="#about" className="block text-slate-200">About</a>
            <a href="#education" className="block text-slate-200">Education</a>
            <a href="#skills" className="block text-slate-200">Skills</a>
            <a href="#contact" className="block text-slate-200">Contact</a>
            <a href={RESUME_VIEW} target="_blank" rel="noopener noreferrer" className="block text-slate-200">View Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
