import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 overflow-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      </main>
    </div>
  );
}

export default App;
