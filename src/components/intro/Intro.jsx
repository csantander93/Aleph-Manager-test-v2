import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef(null);
  const isES = i18n.language !== 'en';

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const orbs = heroRef.current?.querySelectorAll('.orb') || [];
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        orbs.forEach((orb, i) => {
          const speed = [0.18, 0.32, 0.22][i] || 0.2;
          orb.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const goTo = (sel) => {
    const el = document.querySelector(sel);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="container hero-inner">
        <div className="hero-eyebrow-row reveal">
          <span className="badge">v 4.3 · 2026</span>
          <span className="meta">{isES ? 'Plataforma GRC para Banca y Finanzas' : 'GRC platform for Banking & Finance'}</span>
        </div>

        <h1 className="reveal" style={{ '--reveal-delay': '80ms' }}>
          <span className="grey">{isES ? 'Cumplimiento sin' : 'Compliance without'}</span><br />
          <span className="grad">{isES ? 'fricción.' : 'friction.'}</span>
        </h1>

        <p className="hero-desc reveal" style={{ '--reveal-delay': '160ms' }}>
          {t('intro.description')}
        </p>

        <div className="hero-ctas reveal" style={{ '--reveal-delay': '240ms' }}>
          <button className="btn btn-primary" onClick={() => goTo('#contacto')}>
            {t('intro.ctaPrimary')} <span className="arr">→</span>
          </button>
          <button className="btn btn-ghost" onClick={() => goTo('#soluciones')}>
            {t('intro.ctaSecondary')}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Intro;
