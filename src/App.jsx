import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experienced from './components/Experienced';
import Newcomer from './components/Newcomer';
import PerformanceData from './components/PerformanceData';
import HiringComparison from './components/HiringComparison';
import Flow from './components/Flow';
import FAQ from './components/FAQ';
import ConsultationCTA from './components/ConsultationCTA';
import StepForm from './components/StepForm';
import DocumentRequest from './components/DocumentRequest';
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
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
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
        <PerformanceData />
        <HiringComparison />
        <Flow />
        <FAQ />
        <ConsultationCTA />
        <StepForm />
        <DocumentRequest />
        <FinalCTA />
      </main>
      <Footer />
      <FixedCTA />
    </>
  );
}
