import { useTranslation } from 'react-i18next';
import './Features.css';

const FEAT_ICONS = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" opacity=".35" />
    <polyline points="12 7 12 12 15.5 14.5" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" opacity=".35" />
    <path d="M12 8v4l3 3" />
    <path d="M5.5 5.5A9 9 0 0117 4.5M5.5 18.5A9 9 0 0119 18.5" opacity=".5" />
  </svg>,
];

const Features = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';

  const features = [
    { icon: FEAT_ICONS[0], title: t('features.feature1.title'), desc: t('features.feature1.description') },
    { icon: FEAT_ICONS[1], title: t('features.feature2.title'), desc: t('features.feature2.description') },
    { icon: FEAT_ICONS[2], title: t('features.feature3.title'), desc: t('features.feature3.description') },
    { icon: FEAT_ICONS[3], title: t('features.feature4.title'), desc: t('features.feature4.description') },
  ];

  return (
    <section id="caracteristicas" className="features">
      <div className="container">
        <div className="head">
          <div className="eyebrow reveal">02 · {isES ? 'Características' : 'Features'}</div>
          <h2 className="h-section reveal" style={{ '--reveal-delay': '80ms', marginTop: 14 }}>
            {t('features.title')}
          </h2>
          <p className="subtle reveal" style={{ '--reveal-delay': '160ms' }}>
            {t('features.subtitle')}
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature card card-glow reveal" style={{ '--reveal-delay': `${i * 60}ms` }}>
              <span className="num-tag">{String(i + 1).padStart(2, '0')}</span>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
