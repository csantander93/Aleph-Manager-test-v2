import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

const SEO = lazy(() => import('./components/seo/SEO'));
const Header = lazy(() => import('./components/header/Header'));
const Intro = lazy(() => import('./components/intro/Intro'));
const Solutions = lazy(() => import('./components/modules/modules-test/Solutions'));
const Features = lazy(() => import('./components/features/Features'));
const Clients = lazy(() => import('./components/clients/Clients'));
const Awards = lazy(() => import('./components/awards/Awards'));
const ContactForm = lazy(() => import('./components/contact/ContactForm'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    const observe = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
    observe();
    const timer = setInterval(observe, 600);
    return () => { io.disconnect(); clearInterval(timer); };
  }, []);

  return (
    <HelmetProvider>
      <Suspense fallback={<div style={{ background: '#06070B', height: '100vh' }} />}>
        <SEO
          title="Aleph Manager"
          description="Soluciones de software para sistemas de gestión ISO, GRC, PLAFT, continuidad, seguridad y pérdida crediticia esperada."
          keywords="Aleph, software GRC, ISO, gestión de riesgos, cumplimiento, PLAFT, continuidad, seguridad"
          image="https://alephmanager.com/assets/aleph-about.webp"
          url="https://alephmanager.com/"
        />
        <div className="ambient-layer" aria-hidden="true">
          <div className="al-orb al-orb-1" />
          <div className="al-orb al-orb-2" />
          <div className="al-orb al-orb-3" />
        </div>
        <Header />
        <main>
          <Intro />
          <Solutions />
          <Features />
          <Clients />
          <Awards />
          <ContactForm />
        </main>
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
