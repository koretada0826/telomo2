import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experienced from './components/Experienced';
import Newcomer from './components/Newcomer';
import Flow from './components/Flow';
import Pricing from './components/Pricing';
import StepForm from './components/StepForm';
import FinalCTA from './components/FinalCTA';
import FixedCTA from './components/FixedCTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = (el) => {
      if (el.classList?.contains('fade-in') && !el.classList.contains('visible')) {
        io.observe(el);
      }
    };

    document.querySelectorAll('.fade-in').forEach(observe);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            observe(node);
            node.querySelectorAll?.('.fade-in').forEach(observe);
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experienced />
        <Newcomer />
        <Flow />
        <Pricing />
        <StepForm />
        <FinalCTA />
      </main>
      <Footer />
      <FixedCTA />
    </>
  );
}
