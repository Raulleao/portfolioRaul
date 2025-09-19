import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    if (selectedProject) {
      setSelectedProject(null);
    }
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setActiveSection('projects');
    
    // Small delay to ensure state is updated before scrolling
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Update active section based on scroll position
  useEffect(() => {
    if (selectedProject) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  // Show project detail view
  if (selectedProject) {
    return (
      <>
        <ProjectDetail 
          projectId={selectedProject} 
          onBack={handleBackToProjects}
        />
        <Toaster />
      </>
    );
  }

  // Show main portfolio
  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
      />
      
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <ProjectsSection onProjectSelect={handleProjectSelect} />
        <ContactSection />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}