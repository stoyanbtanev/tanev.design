import { useEffect } from 'react';
import './site.css';
import '../styles/fonts.css';

export default function App() {
  useEffect(() => {
    // Apply theme from localStorage before first paint
    const savedTheme = localStorage.getItem('ss-theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    // Dynamically load site.js
    const loadScript = async () => {
      try {
        await import('./site.js');
        console.log('✓ Site logic loaded');
      } catch (err) {
        console.error('Error loading site logic:', err);
      }
    };

    // Dynamically load particles.js after a short delay
    const loadParticles = async () => {
      try {
        await import('./particles.js');
        console.log('✓ Particle animation loaded');
      } catch (err) {
        console.error('Error loading particles:', err);
      }
    };

    loadScript();
    setTimeout(loadParticles, 1500); // Defer non-critical animation

  }, []);

  return (
    <iframe 
      src="/src/imports/index.html" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        zIndex: 999999
      }}
      title="SiteSonar Website"
    />
  );
}