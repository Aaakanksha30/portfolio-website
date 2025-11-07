import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
