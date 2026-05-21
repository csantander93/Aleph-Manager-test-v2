import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import logoGif from '../../assets/ANIMACION-LOGO-ALEPH-v02-+-alpha.gif';

const CheckGlyph = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

const ModIcon = ({ kind }) => {
  const props = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    grc:        <><path d="M4 7l8-4 8 4v6c0 5-4 8-8 9-4-1-8-4-8-9z" /><path d="M9 12l2 2 4-4" /></>,
    plaft:      <><circle cx="11" cy="11" r="6" /><path d="M15.5 15.5L20 20" /></>,
    iso:        <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" /></>,
    continuity: <><path d="M3 12h4l3-7 4 14 3-7h4" /></>,
    credit:     <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h3" /></>,
    audit:      <><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /><path d="M14 3v6h6" /><path d="M8 13h8M8 17h5" /></>,
  };
  return <svg {...props}>{paths[kind]}</svg>;
};

const ChartGlyph = () => {
  const pts = [20, 30, 22, 38, 28, 46, 40, 56, 50, 62, 58, 72, 68, 80, 75, 88];
  const w = 100, h = 100;
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (pts.length - 1)) * w} ${h - p}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="cg-ar" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#6EC3F7" stopOpacity=".35" />
          <stop offset="1" stopColor="#6EC3F7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cg-ln" x1="0" x2="1">
          <stop offset="0" stopColor="#A0FEB8" />
          <stop offset=".5" stopColor="#6EC3F7" />
          <stop offset="1" stopColor="#8B7CF8" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#cg-ar)" />
      <path d={path} stroke="url(#cg-ln)" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
      {pts.map((p, i) => i % 3 === 0
        ? <circle key={i} cx={(i / (pts.length - 1)) * w} cy={h - p} r=".7" fill="#6EC3F7" />
        : null)}
    </svg>
  );
};

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
      <div className="hero-grid" aria-hidden="true" />

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

        <div className="hero-mini reveal" style={{ '--reveal-delay': '320ms' }}>
          <span className="hero-mini-item"><CheckGlyph /> ISO 27001 · 9001 · 37001</span>
          <span className="hero-mini-item"><CheckGlyph /> BCRA · UIF · CNV</span>
          <span className="hero-mini-item"><CheckGlyph /> +60 entidades</span>
        </div>

        <div className="hero-product reveal" style={{ '--reveal-delay': '420ms' }}>
          <div className="frame">
            <div className="topbar">
              <div className="dots">
                <span className="ddot" /><span className="ddot" /><span className="ddot" />
              </div>
              <span className="crumb">aleph-manager.app / grc / dashboard</span>
              <span className="chip" style={{ marginLeft: 'auto' }}>
                <span className="dot" />{isES ? 'Sincronizado' : 'In sync'}
              </span>
            </div>

            <div className="canvas">
              <aside className="hp-side">
                <div className="group">{isES ? 'Módulos' : 'Modules'}</div>
                <div className="item active"><ModIcon kind="grc" /> GRC <span className="pill">12</span></div>
                <div className="item"><ModIcon kind="plaft" /> PLAFT <span className="pill">8</span></div>
                <div className="item"><ModIcon kind="iso" /> ISO 27001 <span className="pill">5</span></div>
                <div className="item"><ModIcon kind="continuity" />{isES ? 'Continuidad' : 'Continuity'} <span className="pill">3</span></div>
                <div className="item"><ModIcon kind="credit" />{isES ? 'Pérdida Cred.' : 'Credit Loss'} <span className="pill">6</span></div>
                <div className="item"><ModIcon kind="audit" />{isES ? 'Auditoría' : 'Audit'} <span className="pill">4</span></div>
              </aside>

              <div className="hp-main">
                <div className="hp-main-head">
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 6 }}>GRC · Q2 2026</div>
                    <h4>{isES ? 'Panel de cumplimiento' : 'Compliance dashboard'}</h4>
                  </div>
                  <span className="chip"><span className="dot" />Live</span>
                </div>

                <div className="hp-stats">
                  <div className="hp-stat">
                    <div className="label">{isES ? 'Controles' : 'Controls'}</div>
                    <div className="value">428</div>
                    <div className="delta">▲ 12.4%</div>
                  </div>
                  <div className="hp-stat">
                    <div className="label">{isES ? 'Riesgos abiertos' : 'Open risks'}</div>
                    <div className="value">37</div>
                    <div className="delta">▼ 6.1%</div>
                  </div>
                  <div className="hp-stat">
                    <div className="label">{isES ? 'Hallazgos' : 'Findings'}</div>
                    <div className="value">14</div>
                    <div className="delta">▼ 28%</div>
                  </div>
                  <div className="hp-stat">
                    <div className="label">{isES ? 'Cumplimiento' : 'Compliance'}</div>
                    <div className="value">96.4%</div>
                    <div className="delta">▲ 2.0%</div>
                  </div>
                </div>

                <div className="hp-chart">
                  <ChartGlyph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
