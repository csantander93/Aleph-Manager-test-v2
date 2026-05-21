import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import alephLogoGif from '../../../assets/Gif-Aleph-una-vez.gif';
import ModulesSheet from './modules-popup/ModulosPopup';
import { modulesDataES } from '../data/modulesData.es';
import { modulesDataEN } from '../data/modulesData.en';
import './Solutions.css';

// Sets the GIF src only when visible so it always plays from frame 1.
// The GIF file itself has loop count = 1, so it stops automatically.
const GifOnce = ({ src, alt }) => {
  const [gifSrc, setGifSrc] = useState('');
  const [containerRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) setGifSrc(src);
  }, [inView, src]);

  return (
    <div ref={containerRef} style={{ lineHeight: 0 }}>
      <img
        src={gifSrc}
        alt={alt}
        style={{
          height: 'clamp(64px, 10vw, 112px)',
          width: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 8px 28px rgba(74,141,255,.35))',
        }}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

const Solutions = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const modulesData = lang === 'en' ? modulesDataEN : modulesDataES;

  const tabs = [
    {
      key: 'audit',
      label: t('solutions.tabs.audit'),
      title: t('solutions.tabMapping.audit'),
      categoryKey: lang === 'es' ? 'Auditoría' : 'Audit',
    },
    {
      key: 'netdisc',
      label: t('solutions.tabs.netDiscovery'),
      title: t('solutions.tabMapping.netDiscovery'),
      categoryKey: 'Net Discovery',
    },
    {
      key: 'grc',
      label: t('solutions.tabs.grc'),
      title: t('solutions.tabMapping.grc'),
      categoryKey: lang === 'es'
        ? 'GRC (Gobierno, Riesgo y Cumplimiento)'
        : 'GRC (Governance, Risk and Compliance)',
    },
    {
      key: 'continuity',
      label: t('solutions.tabs.businessContinuity'),
      title: t('solutions.tabMapping.businessContinuity'),
      categoryKey: lang === 'es' ? 'Continuidad de Negocio' : 'Business Continuity',
    },
    {
      key: 'credit',
      label: t('solutions.tabs.creditLoss'),
      title: t('solutions.tabMapping.creditLoss'),
      categoryKey: lang === 'es' ? 'Pérdida Crediticia Esperada' : 'Expected Credit Loss',
    },
    {
      key: 'plaft',
      label: t('solutions.tabs.plaft'),
      title: t('solutions.tabMapping.plaft'),
      categoryKey: lang === 'es'
        ? 'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)'
        : 'AML/CFT (Anti-Money Laundering and Counter-Terrorism Financing)',
    },
    {
      key: 'legajo',
      label: t('solutions.tabs.digitalFile'),
      title: lang === 'es' ? 'Legajo de Clientes' : 'Customer File',
      categoryKey: lang === 'es' ? 'Legajo de Clientes' : 'Customer File',
    },
  ];

  // SEO schema
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: tabs.map((tab, i) => ({
        '@type': 'SoftwareApplication',
        position: i + 1,
        name: tab.title,
        description: `Solución ${tab.title} de YAFO Consultora`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web-based',
        offers: { '@type': 'Offer', category: 'SoftwareAsAService' },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [lang]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowPopup(true);
  };

  return (
    <section
      id="soluciones"
      className="solutions"
      style={{ position: 'relative', padding: '96px 0', background: '#0f172a', overflow: 'hidden' }}
      aria-labelledby="solutions-heading"
    >
      {/* Decorative background */}
      <div className="sol-bg" aria-hidden="true">
        <div className="sol-grid" />
        <div className="sol-glow sol-glow-blue" />
        <div className="sol-glow sol-glow-amber" />
      </div>

      <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(16px,4vw,32px)' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <span className="sol-eyebrow">
            {lang === 'es' ? 'Nuestra plataforma' : 'Our platform'}
          </span>
          <h2
            id="solutions-heading"
            style={{ fontWeight: 700, color: '#ffffff', marginTop: '12px', lineHeight: 1.2, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em' }}
          >
            {t('solutions.title')}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', marginTop: '16px', maxWidth: '42rem', margin: '16px auto 0', lineHeight: 1.6 }}>
            {lang === 'es'
              ? 'Solución SaaS modular para la gestión integrada de GRC, PLAFT, continuidad de negocio y compliance regulatorio.'
              : 'Modular SaaS solution for integrated GRC, AML/CFT, business continuity and regulatory compliance management.'}
          </p>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}
        >
          <div className="sol-logo-card">
            <GifOnce src={alephLogoGif} alt="Aleph Manager — Plataforma de gestión GRC y riesgos" />
          </div>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}
          role="tablist"
          aria-label={t('solutions.ariaLabels.tablist')}
        >
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              onClick={() => handleTabClick(tab)}
              className="sol-tab-btn"
              role="tab"
              aria-label={lang === 'es' ? `Explorar módulo ${tab.label}` : `Explore ${tab.label} module`}
            >
              <svg className="sol-tab-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginTop: '32px' }}
        >
          {lang === 'es'
            ? 'Hacé clic en cualquier módulo para ver sus funcionalidades'
            : 'Click on any module to see its features'}
        </motion.p>
      </div>

      {/* Modules sheet */}
      {showPopup && activeTab && (
        <ModulesSheet
          tabKey={activeTab.key}
          tabLabel={activeTab.title}
          categoryKey={activeTab.categoryKey}
          modulesData={modulesData}
          lang={lang}
          onClose={() => { setShowPopup(false); setActiveTab(null); }}
        />
      )}
    </section>
  );
};

export default Solutions;
